import { Component,Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountrisService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
  @Input()
  public countries:Country[]=[];
  constructor(private countrisService:CountrisService){}

  searchByCountry(country:string){
    this.countrisService.searchCountry(country)
    .subscribe( countries => {
      this.countries=countries;
    })
  }
}
