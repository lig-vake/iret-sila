import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-and-albums',
  templateUrl: './songs-and-albums.component.html',
  styleUrls: ['./songs-and-albums.component.css']
})
export class SongsAndAlbumsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // play(event: { target: any; }) {
  //   let target = event.target;
  //   target.className = "hidden";
  //   target.classList.add('hidden');
  //   // alert(target.classList);
  //   console.log(target);
  // }

}
