import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountryPagesComponent } from './pages/country-pages/country-pages.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/capital-table/capital-table.component';
import { RegionTableComponent } from './components/region-table/region-table.component';
import { CountriesTableComponent } from './components/countries-table/countries-table.component';

@NgModule({
  declarations: [
    ByCapitalPagesComponent,
    ByCountryPagesComponent,
    ByRegionPagesComponent,
    CountryPagesComponent,
    CountryTableComponent,
    RegionTableComponent,
    CountriesTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule

  ]
})
export class CountriesModule { }
