import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-pages',
  standalone: false,

  templateUrl: './by-country-pages.component.html',
  styles: ``
})
export class ByCountryPagesComponent {
  public Countries:Country[]=[];

  constructor(private countriesService:CountriesService){}

  searchByCountries(term:string):void{
    this.countriesService.searchCountry(term)
    .subscribe(countries=>this.Countries=countries)
  }

}
