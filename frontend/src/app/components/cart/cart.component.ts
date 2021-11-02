import { Component, OnInit } from '@angular/core';
import {Albom} from "../catalog/catalog.component";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  alboms: Albom[] = [
    {href: "#album-1",
      img: "./assets/img/album1.jpg",
      alt: "album1",
      year: 1999,
      artist: "Lena Glass",
      title: "Blue Moments"
    },
    {href: "#album-2",
      img: "./assets/img/album2.jpg",
      alt: "album2",
      year: 1984,
      artist: "Peekaboo",
      title: "Clear Nonsense"
    },
    {href: "#album-3",
      img: "./assets/img/album3.jpg",
      alt: "album3",
      year: 1989,
      artist: "Bright",
      title: "Gone Again"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
