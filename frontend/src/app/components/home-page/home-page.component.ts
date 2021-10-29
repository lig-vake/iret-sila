import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  count: Byte;
  greeting: string;
  audioSrc: String = '';  

  ngOnInit(): void {
    this.greeting = 'Здравствуйте!';
    this.count = 1;

    setTimeout(() => {
      this.greeting = 'Добро пожаловать на сайт команды ИРЭТ - сила!';
      this.count = 2;
    }, 3000);

    setTimeout(() => {
      this.greeting = 'Кликните на иглу проигрывателя, чтобы послушать музыку!';
      this.count = 3;
    }, 6000);

    setTimeout(() => {
      this.greeting = 'Откройте один из альбомов!';
      this.count = 4;
    }, 9000);

    setTimeout(() => {
      this.greeting = 'Made by ИРЭТ - сила, 2021';
      this.count = 5;
    }, 12000);
  }

}
