import { TvShowDataComponent } from './pages/tv-show-data/tv-show-data.component';
import { TvItemComponent } from './pages/tv-item/tv-item.component';
import { Movie } from './models/movie';
import { MovieComponent } from './pages/movie/movie.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

const routes: Routes = [
  {
    path: '', //root page
    component: HomeComponent
  },
  // {
  //   path: 'movies',
  //   component: MoviesComponent
  // },
  {
    path: 'tv_shows',
    component: TvShowsComponent
  },
  {
    path: 'tv_show/:id',
    component: TvShowDataComponent
  },
  // // {
  //   path: 'genres',
  //   component: GenresComponent
  // },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: '**',
    redirectTo: ''
    // component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
