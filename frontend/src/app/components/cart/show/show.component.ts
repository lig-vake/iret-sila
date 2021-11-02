import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Albom} from "../../catalog/catalog.component";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {

  priceOne: number = 3999
  count: number = 0
  price: number = this.priceOne * this.count
  @Input() albom: Albom
  @Output() onRemove = new EventEmitter<number>()
  deleteAlbom() {
    this.onRemove.emit(this.albom.id)
  }
  constructor() { }

  ngOnInit(): void {
  }
  increase() {
    this.count++
  }
  decrease(): number {
    if( (this.count - 1) < 0) return 0
    else
    {
      this.count = this.count - 1
      return 0
    }
  }

  ngOnDestroy(): void {

  }


}
