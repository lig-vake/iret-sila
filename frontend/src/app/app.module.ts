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
import { AlbumPageComponent } from './components/album-page/album-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FilterPipe } from './components/pipes/filter.pipe';
import {FormsModule} from "@angular/forms";
import { ShowComponent } from './components/cart/show/show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TrackComponent } from './components/track/track.component';
import {MatCardModule} from "@angular/material/card";


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
        CurrentPlaylistComponent,
        AlbumPageComponent,
        HomePageComponent,
        FilterPipe,
        ShowComponent,
        TrackComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component: HomePageComponent},
            {path: 'songs-and-albums', component: SongsAndAlbumsComponent},
            {path: 'playlist', component: CurrentPlaylistComponent},
            {path: 'catalog', component: CatalogComponent},
            {path: 'cart', component: CartComponent},
            {path: 'albom', component: AlbomComponent},
            {path: 'album-page', component: AlbumPageComponent},
        ]),
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
