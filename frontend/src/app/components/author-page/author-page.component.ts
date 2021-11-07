import { Component, OnInit } from '@angular/core';

export interface Albom {
  href: string,
  img: string,
  alt: string,
  year: number,
  artist: string,
  title: string,
  id?: number,
  price: number
}

export interface Track {
  img: string,  
  name: string,
  author: string  
}

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {

  toggleAlbums: boolean;
  toggleSingles: boolean;
  toggleInfo: boolean = true;

  getAlbums() {
    this.toggleAlbums = !this.toggleAlbums;
    this.toggleInfo = !this.toggleInfo;
  }
  getSingles() {
    this.toggleSingles = !this.toggleSingles;
    this.toggleInfo = !this.toggleInfo;
  }

  constructor() { }

  ngOnInit(): void {}

  tracks: Track[] =[
    {img: "https://i1.sndcdn.com/artworks-Ofv3CFYpmMowA9G7-5cRY7w-t500x500.jpg",  
      name: "prelude and fuge c-moll",
      author: "j.s. bach / richter"},

    {img: "https://i1.sndcdn.com/artworks-000232634900-nf5ukl-t500x500.jpg",  
      name: "Bank Account",
      author: "21 Savage"},
    
    {img: "https://pesni.life/pic/20/85/208566.400x400.jpg",  
      name: "her",
      author: "Vowl."}
  ]

  alboms:Albom[] = [
    {href: "album-page",
      img: "./assets/img/album1.jpg",
      alt: "album1",
      year: 1999,
      artist: "Lena Glass",
      title: "Blue Moments",
      price: 3999
    },
    {href: "album-page",
      img: "./assets/img/album2.jpg",
      alt: "album2",
      year: 1984,
      artist: "Peekaboo",
      title: "Clear Nonsense",
      price: 3999
    },
    {href: "album-page",
      img: "./assets/img/album3.jpg",
      alt: "album3",
      year: 1989,
      artist: "Bright",
      title: "Gone Again",
      price: 3999
    },
    {href: "album-page",
      img: "./assets/img/album4.jpg",
      alt: "album4",
      year: 2006,
      artist: "Dynasty",
      title: "Sacred",
      price: 3999
    },
    {href: "album-page",
      img: "./assets/img/album5.jpg",
      alt: "album5",
      year: 1992,
      artist: "Digital Love",
      title: "Follow the blink",
      price: 3999
    },
    {href: "album-page",
      img: "./assets/img/album6.jpg",
      alt: "album6",
      year: 1987,
      artist: "The Matadoors",
      title: "Oilspill",
      price: 3999
    }
  ];

}
