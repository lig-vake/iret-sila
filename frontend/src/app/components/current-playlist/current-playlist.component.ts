import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-playlist',
  templateUrl: './current-playlist.component.html',
  styleUrls: ['./current-playlist.component.css']
})
export class CurrentPlaylistComponent implements OnInit {
  // https://cdndl.zaycev.net/track/24640159/6pGxk5jCuxPqWhZPLrt5nc4WoTWN5rz5XoaT354RQCCEmTHHwr2kdXsp3KAC5naudh6VRTyLdutoUBvrpM7kfv14UjCFiSfYxGTPgz9W8L5FmzR8XHNTi5WptZrYmcdfbt6fDgwAHqcyWmKMRAJcKMtBBnAvuRpQ7aK226u6vpuBqVHzr3JEQ1iaC6KPTRoNBF3VxG11o51edGGRo4Ui7U6LD32BZAFtRRZvhDFjcgKmSB54Z6FoQZZu9bi52rzRoV7xfvPFsRrvVZ4wDQ3tMgvtTqH1aSsDwbR5QQtEdpTGn8cJqkRexqLqAAK8KGqM817i5pfgsufgYS3CnxrvwZbwks1wkF
  audioSrc: string = '';
  private curWidth: number;
  public scaleXY: string;

  changeAudio(src: string) {
    this.audioSrc = src;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    // ресайзим плеер
    this.curWidth = document.getElementById('player-wrapper')!.offsetWidth;
    this.scaleXY = 'scale(' + this.curWidth * 0.9 / 630 + ')';

    console.log(this.curWidth * 0.9 / 630);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
