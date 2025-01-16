import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-country-pages',
  standalone: false,

  templateUrl: './country-pages.component.html',
  styles: ``
})
export class CountryPagesComponent implements OnInit {

  public Country?:Country;

  constructor(
    private activateRoute:ActivatedRoute,
    private router:Router,
    private countriesService:CountriesService,
  ){}
  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({id})=>this.countriesService.searchCountryByAlphaCode(id))//*{id} estamos desestructurando de params
    )
    .subscribe(country=>{
        if(!country){
          return this.router.navigateByUrl('');
        }
       return  this.Country=country;
      });
  }
}
