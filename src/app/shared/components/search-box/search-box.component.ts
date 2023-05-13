import { Component,Input,EventEmitter,Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer:Subject<string>=new Subject<string>();
  private debouncerSubscrition?:Subscription;
  @Input()
  public placeholder:string='';

  @Input()
  public initialValue:string='';

  @Output()
  public onValue:EventEmitter<string>=new EventEmitter();

  @Output()
  public onDebounce:EventEmitter<string>=new EventEmitter();

  ngOnInit(): void {

    this.debouncerSubscrition = this.debouncer
    .pipe(
      debounceTime(300)
      )
    .subscribe( value =>{
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSubscrition?.unsubscribe();
  }

  emitValue(value:string){
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string):void{
    this.debouncer.next(searchTerm);
  }
}
