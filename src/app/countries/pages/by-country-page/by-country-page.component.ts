import { Component,Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountrisService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {
  @Input()
  public countries:Country[]=[];
  public initialValue:string='';

  constructor(private countrisService:CountrisService){}

  ngOnInit(): void {
    this.countries=this.countrisService.cacheStore.byCountries.countries;
    this.initialValue=this.countrisService.cacheStore.byCountries.terms;
  }

  searchByCountry(country:string){
    this.countrisService.searchCountry(country)
    .subscribe( countries => {
      this.countries=countries;
    })
  }
}
