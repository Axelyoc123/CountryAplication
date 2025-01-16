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
<<<<<<< HEAD
  public region:Country[]=[]
=======
  public region:Country[]=[];
>>>>>>> cf64b7d (subiendo cambios de countrie y region)
}
