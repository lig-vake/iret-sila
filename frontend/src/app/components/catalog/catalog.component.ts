import { Component, OnInit } from '@angular/core';

export interface Albom {
  href: string,
  img: string,
  alt: string,
  year: number,
  artist: string,
  title: string
}

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  search = ''
  alboms:Albom[] = [
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
    },
    {href: "#album-4",
      img: "./assets/img/album4.jpg",
      alt: "album4",
      year: 2006,
      artist: "Dynasty",
      title: "Sacred"
    },
    {href: "#album-5",
      img: "./assets/img/album5.jpg",
      alt: "album5",
      year: 1992,
      artist: "Digital Love",
      title: "Follow the blink"
    },
    {href: "#album-6",
      img: "./assets/img/album6.jpg",
      alt: "album6",
      year: 1987,
      artist: "The Matadoors",
      title: "Oilspill"
    },
    {href: "#album-7",
      img: "./assets/img/album7.jpg",
      alt: "album7",
      year: 1992,
      artist: "Nostralus",
      title: "Extreme Water"
    },
    {href: "#album-8",
      img: "./assets/img/album8.jpg",
      alt: "album8",
      year: 1979,
      artist: "Fanfare",
      title: "Isolde"
    },
    {href: "#album-9",
      img: "./assets/img/album9.jpg",
      alt: "album9",
      year: 2005,
      artist: "Skyrunners",
      title: "No problem, Housten"
    },
    {href: "#album-10",
      img: "./assets/img/album10.jpg",
      alt: "album10",
      year: 2010,
      artist: "Insane Children",
      title: "Playground"
    },
    {href: "#album-11",
      img: "./assets/img/album11.jpg",
      alt: "album11",
      year: 1985,
      artist: "The Green Lords",
      title: "Bacteria Invasion"
    },
    {href: "#album-12",
      img: "./assets/img/album12.jpg",
      alt: "album12",
      year: 1990,
      artist: "The Whistlespankers",
      title: "Nigel &amp; Me"
    }
  ];


  constructor() { }

  ngOnInit(): void {

  }

}

//interface Albom {
  //img: string,
  //name:string,
  //author: string
//}
