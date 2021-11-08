import { Component, OnInit, Input } from '@angular/core';
import {Albom, Directions} from "../catalog/catalog.component";
import {deleteObj} from "./show/show.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Input() rok: Directions.Rock
  @Input() jaz: Directions.Jaz
  total: number = 0
  alboms: Albom[]
  constructor() { }

  ngOnInit(): void {
    this.alboms = [
      {href: "#album-1",
        img: "./assets/img/album1.jpg",
        alt: "album1",
        year: 1999,
        artist: "Lena Glass",
        title: "Blue Moments",
        price: 3999,
        direction: this.rok,
        id: 1,
      },
      {href: "#album-2",
        img: "./assets/img/album2.jpg",
        alt: "album2",
        year: 1984,
        artist: "Peekaboo",
        title: "Clear Nonsense",
        price: 3999,
        direction: this.rok,
        id: 2
      },
      {href: "#album-3",
        img: "./assets/img/album3.jpg",
        alt: "album3",
        year: 1989,
        artist: "Bright",
        title: "Gone Again",
        price: 3999,
        id: 3,
        direction: this.jaz
      }
    ]
    for (let i = 0; i < this.alboms.length; i++)
      this.total = this.total + this.alboms[i].price


  }
  removeAlbom(obj: deleteObj) {
    this.alboms = this.alboms.filter(albom => albom.id !== obj.id)
    this.total = this.total - obj.priceAll
  }
  makePlusTotal(price: number) {
    this.total = this.total + price
  }
  makeMinusTotal(price: number) {
    this.total = this.total - price
  }
}
