import {Byte} from '@angular/compiler/src/util';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  count: Byte;
  greeting: string;
  audioSrc: string = '';

  ngOnInit(): void {
    this.greeting = 'Здравствуйте!';
    this.count = 1;

    setTimeout(() => {
      this.greeting = 'Добро пожаловать на сайт команды ИРЭТ - сила!';
      this.count = 2;
    }, 3000);

    setTimeout(() => {
      this.greeting = 'Включите проигрыатель или откройте один из альбомов!';
      this.count = 3;
    }, 6000);

    setTimeout(() => {
      this.greeting = 'Воспользуйтесь фильтрами поиска!';
      this.count = 4;
    }, 9000);

    setTimeout(() => {
      this.greeting = 'Made by ИРЭТ - сила, 2021';
      this.count = 5;
    }, 12000);
  }

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
