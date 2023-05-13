import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CountrisService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{
  public countries:Country[]=[];
  public isLoading:boolean=false;
  public initialValue:string='';

  constructor(private countrisService:CountrisService){}
  ngOnInit(): void {
    this.countries=this.countrisService.cacheStore.byCapital.countries;
    this.initialValue=this.countrisService.cacheStore.byCapital.terms;
  }

  searchByCapital(term:string):void{
    this.isLoading=true;
    this.countrisService.searchCapital(term)
    .subscribe( countries =>{
      this.countries=countries;
      this.isLoading=false;
    });
  }
}
