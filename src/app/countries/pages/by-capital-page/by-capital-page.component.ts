import { Component,EventEmitter,Output } from '@angular/core';
import { CountrisService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
  public countries:Country[]=[];
  constructor(private countrisService:CountrisService){}

  searchByCapital(term:string):void{

    this.countrisService.searchCapital(term)
    .subscribe( countries =>{
      this.countries=countries;
    });
  }
}
