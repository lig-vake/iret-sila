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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShowComponent } from './components/cart/show/show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TrackComponent } from './components/track/track.component';
import {MatCardModule} from "@angular/material/card";
import { LkComponent } from './components/lk/lk.component';
import { PersonalInformationComponent } from './components/lk/personal-information/personal-information.component';
import { SettingsComponent } from './components/lk/settings/settings.component';
import { PurchaseHistoryComponent } from './components/lk/purchase-history/purchase-history.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FiltDirectionPipe } from './components/pipes/filt-direction.pipe';
import {MatMenuModule} from "@angular/material/menu";
import { GenreMenuComponent } from './components/genre-menu/genre-menu.component';
import { AuthorPageComponent } from './components/author-page/author-page.component';
import { AboutComponent } from './components/about/about.component';


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
        LkComponent,
        PersonalInformationComponent,
        SettingsComponent,
        PurchaseHistoryComponent,
        FiltDirectionPipe,
        GenreMenuComponent,
        AuthorPageComponent,
        AboutComponent,
    ],
    entryComponents: [
      SettingsComponent
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
            {path: 'lk', component: LkComponent},
            {path: 'lk/settings', component: LkComponent},
            {path: 'lk/purchase-history', component: LkComponent},
            {path: 'author-page', component: AuthorPageComponent},
            {path: 'about', component: AboutComponent}
        ]),
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatSlideToggleModule,
        MatMenuModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
