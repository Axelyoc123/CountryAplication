import { Component, ElementRef, EventEmitter, Input, OnInit, Output, output, ViewChild} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-searchbox',
  standalone: false,
  templateUrl: './searchbox.component.html',
})
export class SearchboxComponent implements OnInit{

  private debouncer:Subject<string>=new Subject<string>();

  @Input()
  public placeholder:string='';

  @Output()
  public onValue:EventEmitter<string>=new EventEmitter();

  @Output()
  public onDebounce=new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value=>{
      this.onDebounce.emit(value)
    })
  }

  emitValue(value:string):void{
    this.onValue.emit(value)
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm)
  }

}
