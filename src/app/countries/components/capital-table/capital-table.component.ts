import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'capital-table',
  standalone: false,
  templateUrl: './capital-table.component.html',
  styles:[
    `img{
      width:30px;
    }`
  ]
})
export class CountryTableComponent {
  @Input()
  public countries:Country[]=[]

}
