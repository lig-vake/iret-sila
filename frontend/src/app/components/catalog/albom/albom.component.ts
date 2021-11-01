import { Component, OnInit } from '@angular/core';

export interface Albom {
  img: string
  name: string
  author: string
}

@Component({
  selector: 'app-albom',
  templateUrl: './albom.component.html',
  styleUrls: ['./albom.component.css']
})
export class AlbomComponent implements OnInit {

  alboms: Albom[]

  constructor() { }

  ngOnInit(): void {
    this.alboms = [
      {
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb7cf464906961.5ae1ab010eeb5.png',
        name: 'first',
        author: 'first author'
      },

      {
        img: 'https://goods.kaypu.com/photo/56354772384e1f611f2066dc.jpg',
        name: 'second',
        author: 'second author'
      },

      {
        img: 'https://phonoteka.org/uploads/posts/2021-05/thumbs/1620124539_33-phonoteka_org-p-foni-dlya-trekov-34.jpg',
        name: 'third',
        author: 'third author'
      },
      {
        img: 'https://lastfm.freetls.fastly.net/i/u/ar0/6e303c647ed69c7dd3f1f4352f019b6f.jpg',
        name: 'fourth',
        author: 'fourth author'
      },
      {
        img: 'https://music-ark.ru/upload/iblock/c22/c22100dcd310dabcf6607593754e674c.jpg',
        name: 'fifth',
        author: 'fifth author'
      },

      {
        img: 'https://kotofoto.ru/product_img/3100/152280/152280_vinilovaya_plastinka_script_the_freedom_childm.jpg?v=1508414612',
        name: 'sixth',
        author: 'sixth author'
      },
      {
        img: 'https://kotofoto.ru/product_img/3100/152280/152280_vinilovaya_plastinka_script_the_freedom_childm.jpg?v=1508414612',
        name: 'seventh',
        author: 'seventh author'
      },
      {
        img: 'https://lastfm.freetls.fastly.net/i/u/ar0/ad8de3c33d06411dae31544d40fdff12.jpg',
        name: 'eightth',
        author: 'eighth author'
      },
      {
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb7cf464906961.5ae1ab010eeb5.png',
        name: 'nineth',
        author: 'nineth author'
      }
    ]
  }

}
