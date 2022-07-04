import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './pages/slider/slider.component';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import {PaginatorModule} from 'primeng/paginator';
import { MovieComponent } from './pages/movie/movie.component';
import {TabViewModule} from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import {ImageModule} from 'primeng/image';
import {CarouselModule} from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvItemBannerComponent } from './pages/tv-item-banner/tv-item-banner.component';
import { TvItemComponent } from './pages/tv-item/tv-item.component';
import { TvShowDataComponent } from './pages/tv-show-data/tv-show-data.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenresComponent } from './pages/genres/genres.component';
import { GenreComponent } from './pages/genre/genre.component';
import { GenreItemComponent } from './pages/genre-item/genre-item.component';
import {InputTextModule} from 'primeng/inputtext';
import { SearchResultComponent } from './pages/search-result/search-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    ItemsBannerComponent,
    MovieItemComponent,
    MovieComponent,
    VideoEmbedComponent,
    TvShowsComponent,
    TvItemBannerComponent,
    TvItemComponent,
    TvShowDataComponent,
    MoviesComponent,
    GenresComponent,
    GenreComponent,
    GenreItemComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    ImageModule,
    CarouselModule,
    CommonModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
