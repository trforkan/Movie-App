import { Movie, MovieDto } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies: Movie[] = [] ;
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];
  popularMoviesList: Movie[] = [];

  

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    // this.moviesService.searchMovies(2).subscribe(response=>{
    //   this.popularMoviesList = response;
    // })

    this.moviesService.getMovies("popular").subscribe((response)=>{
      // console.log( response);
      this.popularMovies=response;
    })

    this.moviesService.getMovies("top_rated").subscribe((response)=>{
      // console.log( response);
      this.topRatedMovies=response;
    })

    this.moviesService.getMovies("upcoming").subscribe((response)=>{
      // console.log( response);
      this.upcomingMovies=response;
    })

    this.moviesService.getMovies("now_playing").subscribe((response)=>{
      // console.log( response);
      this.nowPlayingMovies=response;
    })

  }
}
