import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-pages',
  standalone: false,

  templateUrl: './by-country-pages.component.html',
  styles: ``
})
export class ByCountryPagesComponent implements OnInit {
  public Countries:Country[]=[];
  public initialValue:string=''
  public isLoading:boolean=false;
  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.Countries=this.countriesService.cacheStore.byCountries.countries;
    this.initialValue=this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountries(term:string):void{
    this.isLoading=true;
    this.countriesService.searchCountry(term)
    .subscribe(
      countries=>{this.Countries=countries
      this.isLoading=false;
  })
  }

}
