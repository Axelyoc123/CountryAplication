import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-pages',
  standalone: false,

  templateUrl: './by-region-pages.component.html',
  styles: ``
})
export class ByRegionPagesComponent {
    public Region:Country[]=[];

    constructor(private RegionService:CountriesService){}

    searchByRegion(term:string):void{
      this.RegionService.searchRegion(term)
      .subscribe(region=>{
        this.Region=region;
      })
    }

}
