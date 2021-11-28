import { Component, OnInit, Input } from '@angular/core';
import {Albom, Directions} from "../catalog/catalog.component";
import {deleteObj, ShowComponent} from "./show/show.component";
import {AuthService} from "../../services/auth.service";
import {Card} from "../../models/card";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Input() rok: Directions.Rock
  @Input() jaz: Directions.Jaz
  total: number = 0
  //alboms: Albom[]
  cards: Card[]
  constructor(private as: AuthService, private ss: StoreService) { }

  ngOnInit(): void {
    this.ss.getOrders().subscribe(res => this.cards = res);
    //for (let i = 0; i < this.alboms.length; i++)
    //  this.total = this.total + this.alboms[i].price


  }
 // removeAlbom(obj: deleteObj) {
 //   this.alboms = this.alboms.filter(albom => albom.id !== obj.id)
 //   this.total = this.total - obj.priceAll
 // }
 // makePlusTotal(price: number) {
 //   this.total = this.total + price
 // }
 // makeMinusTotal(price: number) {
 //   this.total = this.total - price
 // }
}
