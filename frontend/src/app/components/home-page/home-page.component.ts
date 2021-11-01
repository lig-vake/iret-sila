import {Byte} from '@angular/compiler/src/util';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

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

}
