import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albom',
  templateUrl: './albom.component.html',
  styleUrls: ['./albom.component.css']
})
export class AlbomComponent implements OnInit {
  fotos:string[];
  info:string[];
  foto1:string;
  foto2:string;
  foto3:string;
  foto4:string;
  foto5:string;
  foto6:string;
  foto7:string;
  foto8:string;
  foto9:string;
  constructor() { }

  ngOnInit(): void {
    this.foto1 = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb7cf464906961.5ae1ab010eeb5.png';
    this.foto2 = 'https://goods.kaypu.com/photo/56354772384e1f611f2066dc.jpg';
    this.foto3 = 'https://phonoteka.org/uploads/posts/2021-05/thumbs/1620124539_33-phonoteka_org-p-foni-dlya-trekov-34.jpg';
    this.foto4 = 'https://lastfm.freetls.fastly.net/i/u/ar0/6e303c647ed69c7dd3f1f4352f019b6f.jpg';
    this.foto5 =' https://music-ark.ru/upload/iblock/c22/c22100dcd310dabcf6607593754e674c.jpg';
    this.foto6 = 'https://kotofoto.ru/product_img/3100/152280/152280_vinilovaya_plastinka_script_the_freedom_childm.jpg?v=1508414612';
    this.foto7 = 'https://kotofoto.ru/product_img/3100/152280/152280_vinilovaya_plastinka_script_the_freedom_childm.jpg?v=1508414612';
    this.foto8 = 'https://lastfm.freetls.fastly.net/i/u/ar0/ad8de3c33d06411dae31544d40fdff12.jpg';
    this.foto9 = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb7cf464906961.5ae1ab010eeb5.png';
    this.fotos = [this.foto1,this.foto2,this.foto3,this.foto4,this.foto5,this.foto6,this.foto7,this.foto8]
    this.info = ['Первая картинка','Вторая картинка','Третья картинка','Четвёртая картинка','Пятая картинка','Шестая картинка','Седьмая картинка', 'Восьмая картинка']
  }

}
