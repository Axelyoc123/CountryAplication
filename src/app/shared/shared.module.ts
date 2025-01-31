import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactpageComponent } from './pages/contact-page/contact-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactpageComponent,
    SearchboxComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactpageComponent,
    SearchboxComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
