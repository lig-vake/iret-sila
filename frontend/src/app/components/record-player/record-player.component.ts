import { Component, OnInit } from '@angular/core';

declare function getPlay(): void;
declare function getPause(): void;
@Component({
  selector: 'app-record-player',
  templateUrl: './record-player.component.html',
  styleUrls: ['./record-player.component.css']
})
export class RecordPlayerComponent {
  getPlayFunc(){
    getPlay();
  }
  getPauseFunc(){
    getPause();
  }
}
