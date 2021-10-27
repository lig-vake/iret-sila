import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
  audioSrc: string = '';
  
  changeAudio(src: string) {
    this.audioSrc = src;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
