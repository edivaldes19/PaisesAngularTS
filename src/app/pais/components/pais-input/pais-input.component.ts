import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {
  @Output() public onEnter: EventEmitter<string> = new EventEmitter()
  @Output() public onDebounce: EventEmitter<string> = new EventEmitter()
  @Input() public placeholder: string = ''
  public debouncer: Subject<string> = new Subject()
  public termino: string = ''
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe(valor => {
        this.onDebounce.emit(valor)
      })
  }
  buscar() {
    this.onEnter.emit(this.termino)
  }
  teclaPresionada() {
    this.debouncer.next(this.termino)
  }
}