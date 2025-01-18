import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import {Region} from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-pages',
  standalone: false,

  templateUrl: './by-region-pages.component.html',
  styles: ``
})
export class ByRegionPagesComponent implements OnInit
 {
    public Region:Country[]=[];
    public regions:Region[]=['Africa','Americas','Asia','Europe','Oceania']
    public selectedRegion?:Region;
    public initialValue:string='';
    public isLoading:boolean=false;

    constructor(private RegionService:CountriesService){}
    ngOnInit(): void {
     this.Region=this.RegionService.cacheStore.byRegion.countries;
     this.initialValue=this.RegionService.cacheStore.byRegion.region;
     this.selectedRegion=this.RegionService.cacheStore.byRegion.region;
    }

    searchByRegion(region:Region):void{
      this.isLoading=true;
      this.selectedRegion=region;
      this.RegionService.searchRegion(region)
      .subscribe(countries=>{
        this.Region=countries;
        this.isLoading=false;
      })
    }

}
