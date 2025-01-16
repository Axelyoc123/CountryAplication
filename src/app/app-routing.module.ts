import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactpageComponent } from './shared/pages/contact-page/contact-page.component';

const routes:Routes=[
  // {
  //   path:'',
  //   component:HomePageComponent
  // },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'contact',
    component:ContactpageComponent
  },
  {
    path:'countries',
    loadChildren:()=>import('./countries/countries.module').then(m=>m.CountriesModule)
  },
  {
    path:'**',
    redirectTo:'countries' //*estamos indicando que si el usuario no tiene ninguna ruta en el url (/home./about) automaticamente redirigira al home
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ]
})
export class AppRoutingModule { }
