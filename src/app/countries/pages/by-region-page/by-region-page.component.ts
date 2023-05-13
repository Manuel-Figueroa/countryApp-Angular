import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountrisService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{
  @Input()
  public countries:Country[]=[];
  public regions:Region[]=['Africa','America','Asia','Europa','Oceania'];
  public selectedRegion?:Region;


  constructor(private countrisService:CountrisService){}
  ngOnInit(): void {
    this.countries=this.countrisService.cacheStore.byRegion.countries;
    this.selectedRegion=this.countrisService.cacheStore.byRegion.region;
  }

  searchByRegion(region:Region){
    this.selectedRegion=region;
    this.countrisService.searchRegion(region)
    .subscribe( countries => {
      this.countries=countries;
    })
  }

}
