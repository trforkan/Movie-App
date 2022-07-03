import { MovieVideos, MovieImages, Credits } from './../../models/movie';
import { IMAGES_SIZES } from './../../constants/images-sizes';
import { MoviesService } from './../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie , CAST } from 'src/app/models/movie';
import { SafeResourceUrl } from '@angular/platform-browser';
import { first } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit , OnDestroy {

  movie: Movie | null = null;

  movieVideos : MovieVideos[] = [];

  movieImages: MovieImages[] = [];

  imgSizes = IMAGES_SIZES;

  MovieCast: CAST[] = []; 

  baseUrl : string = "https://image.tmdb.org/t/p/";

  imgSize = IMAGES_SIZES;

  

  constructor(private route: ActivatedRoute , private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id})=>{
      console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCast(id);
    });
  }

  ngOnDestroy() {
    // console.log('destroyed');
  }

  getMovieCast(id: number){
    this.moviesService.getMovieCast(id).subscribe(response=>{
      this.MovieCast=response.cast;
      // console.log(this.MovieCast);
    })
  }

  getMovie(id: number){
    this.moviesService.getMovie(id).subscribe(movie=>{
      this.movie = movie;
      // console.log(movie);
    })
  }

  getMovieImages(id: number){
    this.moviesService.getMoviePhoto(id).subscribe(response=>{
      this.movieImages = response;
    })
  }

  getMovieVideos(id: number) {
    this.moviesService.getMovieVideos(id).subscribe((response) => {
      this.movieVideos = response;
    }); 
  }

}
