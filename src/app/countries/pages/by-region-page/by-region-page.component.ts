import { Component ,Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountrisService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  @Input()
  public countries:Country[]=[];
  constructor(private countrisService:CountrisService){}

  searchByRegion(region:string){
    this.countrisService.searchRegion(region)
    .subscribe( countries => {
      this.countries=countries;
    })
  }

}
