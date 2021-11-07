import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
export interface Albom {
  href: string,
  img: string,
  alt: string,
  year: number,
  artist: string,
  title: string,
  id: number,
  price: number,
  direction: number
}
export enum Directions {
  All,
  Hip ,
  Jaz,
  Rock,
  Pop,
  Bluz
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  form: FormGroup
  all: Directions = Directions.All
  rok: Directions = Directions.Rock
  hip: Directions = Directions.Hip
  jaz: Directions = Directions.Jaz
  bluz: Directions = Directions.Bluz
  pop: Directions = Directions.Pop
  search = ''
  directionSearch: number
  alboms:Albom[] = [
    {href: "#album-1",
      img: "./assets/img/album1.jpg",
      alt: "album1",
      year: 1999,
      artist: "Lena Glass",
      title: "Blue Moments",
      price: 3999,
      id: 1,
      direction: this.rok
    },
    {href: "#album-2",
      img: "./assets/img/album2.jpg",
      alt: "album2",
      year: 1984,
      artist: "Peekaboo",
      title: "Clear Nonsense",
      price: 3999,
      id: 2,
      direction: this.rok
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
    },
    {href: "#album-4",
      img: "./assets/img/album4.jpg",
      alt: "album4",
      year: 2006,
      artist: "Dynasty",
      title: "Sacred",
      price: 3999,
      id: 4,
      direction: this.bluz
    },
    {href: "#album-5",
      img: "./assets/img/album5.jpg",
      alt: "album5",
      year: 1992,
      artist: "Digital Love",
      title: "Follow the blink",
      price: 3999,
      id: 5,
      direction: this.hip
    },
    {href: "#album-6",
      img: "./assets/img/album6.jpg",
      alt: "album6",
      year: 1987,
      artist: "The Matadoors",
      title: "Oilspill",
      price: 3999,
      id: 6,
      direction: this.pop
    },
    {href: "#album-7",
      img: "./assets/img/album7.jpg",
      alt: "album7",
      year: 1992,
      artist: "Nostralus",
      title: "Extreme Water",
      price: 3999,
      id: 7,
      direction: this.hip
    },
    {href: "#album-8",
      img: "./assets/img/album8.jpg",
      alt: "album8",
      year: 1979,
      artist: "Fanfare",
      title: "Isolde",
      price: 3999,
      id: 8,
      direction: this.rok
    },
    {href: "#album-9",
      img: "./assets/img/album9.jpg",
      alt: "album9",
      year: 2005,
      artist: "Skyrunners",
      title: "No problem, Housten",
      price: 3999,
      id: 9,
      direction: this.bluz
    },
    {href: "#album-10",
      img: "./assets/img/album10.jpg",
      alt: "album10",
      year: 2010,
      artist: "Insane Children",
      title: "Playground",
      price: 3999,
      id: 10,
      direction: this.pop
    },
    {href: "#album-11",
      img: "./assets/img/album11.jpg",
      alt: "album11",
      year: 1985,
      artist: "The Green Lords",
      title: "Bacteria Invasion",
      price: 3999,
      id: 11,
      direction: this.hip
    },
    {href: "#album-12",
      img: "./assets/img/album12.jpg",
      alt: "album12",
      year: 1990,
      artist: "The Whistlespankers",
      title: "Nigel &amp; Me",
      price: 3999,
      id: 12,
      direction: this.pop
    }
  ];


  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      inp: new FormControl('')
    })
  }

  submit() {
    console.log('Form suki', this.form)
    this.search = this.form.value.inp
    console.log('search suki is', this.search)
  }
}

//interface Albom {
//img: string,
//name:string,
//author: string
//}
