import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecordPlayerComponent } from './components/record-player/record-player.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { AlbomComponent } from './components/catalog/albom/albom.component';
import { CartComponent } from './components/cart/cart.component';
import { SongsAndAlbumsComponent } from './components/songs-and-albums/songs-and-albums.component';
import { CurrentPlaylistComponent } from './components/current-playlist/current-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordPlayerComponent,
    HeaderComponent,
    FooterComponent,
    CatalogComponent,
    AlbomComponent,
    CartComponent,
    FooterComponent,
    SongsAndAlbumsComponent,
    CurrentPlaylistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: RecordPlayerComponent},
      {path: 'songs-and-albums', component: SongsAndAlbumsComponent},
      {path: 'playlist', component: CurrentPlaylistComponent},
      {path: 'catalog', component: CatalogComponent},
      {path: 'cart', component: CartComponent},
      {path: 'albom', component: AlbomComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
