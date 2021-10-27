import {Component, Input, OnChanges} from '@angular/core';

declare function getPlay(): void;
declare function getPause(): void;
@Component({
  selector: 'app-record-player',
  templateUrl: './record-player.component.html',
  styleUrls: ['./record-player.component.css'],
})
export class RecordPlayerComponent implements OnChanges {
  @Input() src: string;

  getPlayFunc(){
    // Если трек не был передан, включаем стандартную песенку
    if(this.src == '') {
      this.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/390561/Any-Colour-You-Like.mp3';
    }
    // alert(this.src);
    getPlay();
  }

  getPauseFunc(){
    getPause();
  }

  ngOnChanges(changes: any): void {
    // Если трек сменился, запускаем заново
    if(this.src != '') {
      getPlay();
    }
  }
}

