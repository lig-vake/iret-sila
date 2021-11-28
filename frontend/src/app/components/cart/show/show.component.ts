import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Albom} from "../../catalog/catalog.component";
import {Card} from "../../../models/card";

export interface deleteObj {
  id: number,
  priceAll: number
}

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {

  count: number = 1
  priceAll: number = 0
  deleteObject: deleteObj
  @Input() albom: Albom
  @Input() card: Card
  @Output() onRemove = new EventEmitter<deleteObj>()
  @Output() onPlusTotal = new EventEmitter<number>()
  @Output() onMinusTotal = new EventEmitter<number>()
  deleteAlbom() {
    this.deleteObject = {id: this.albom.id, priceAll: this.priceAll}
    this.onRemove.emit(this.deleteObject)
  }
  constructor() { }


  ngOnInit(): void {
    this.priceAll = this.albom.price * this.count
  }
  increase() {
    this.count++
    this.onPlusTotal.emit(this.albom.price)
    this.priceAll = this.albom.price * this.count
  }
  decrease(): number {
    if( (this.count - 1) < 0) return 0
    else
    {
      this.count = this.count - 1
      this.onMinusTotal.emit(this.albom.price)
      this.priceAll = this.albom.price * this.count
      return 0
    }
  }

  ngOnDestroy(): void {

  }


}
