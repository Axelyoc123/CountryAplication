import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCapitalPagesComponent } from './pages/by-capital-pages/by-capital-pages.component';
import { ByCountryPagesComponent } from './pages/by-country-pages/by-country-pages.component';
import { ByRegionPagesComponent } from './pages/by-region-pages/by-region-pages.component';
import { CountryPagesComponent } from './pages/country-pages/country-pages.component';

const routes:Routes=[
  {
    path:'by-capital',
    component:ByCapitalPagesComponent
  },
  {
    path:'by-country',
    component:ByCountryPagesComponent
  },
  {
    path:'by-region',
    component:ByRegionPagesComponent
  },
  {
    path:'by/:id',
    component:CountryPagesComponent
  },
  {
    path:'**',
    redirectTo:'by-capital' //*estamos indicando que si el usuario no tiene ninguna ruta en el url (/home./about) automaticamente redirigira al home
  }
]

@NgModule({
  imports: [
   RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule { }
