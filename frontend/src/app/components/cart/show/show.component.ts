import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Albom} from "../../catalog/catalog.component";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {

  count: number = 1
  priceAll: number = 0
  @Input() albom: Albom
  @Output() onRemove = new EventEmitter<number>()
  deleteAlbom() {
    this.onRemove.emit(this.albom.id)
  }
  constructor() { }


  ngOnInit(): void {
    this.priceAll = this.albom.price * this.count
  }
  increase() {
    this.count++
    this.priceAll = this.albom.price * this.count
  }
  decrease(): number {
    if( (this.count - 1) < 0) return 0
    else
    {
      this.count = this.count - 1
      this.priceAll = this.albom.price * this.count
      return 0
    }
  }

  ngOnDestroy(): void {

  }


}
