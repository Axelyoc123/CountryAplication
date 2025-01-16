import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'region-table',
  standalone: false,
  templateUrl: './region-table.component.html',
  styles:
  [
    `img{
      width:30px;
    }`
  ]

})
export class RegionTableComponent {
  @Input()
  public region:Country[]=[]
}
