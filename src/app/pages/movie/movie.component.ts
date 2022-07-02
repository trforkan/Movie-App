import { MovieVideos, MovieImages } from './../../models/movie';
import { IMAGES_SIZES } from './../../constants/images-sizes';
import { MoviesService } from './../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie | null = null;

  movieVideos : MovieVideos[] = [];

  movieImages: MovieImages[] = [];

  imgSizes = IMAGES_SIZES;


  baseUrl : string = "https://image.tmdb.org/t/p/";

  imgSize = IMAGES_SIZES;

  constructor(private route: ActivatedRoute , private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{
      console.log(id);
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
    });
  }



  getMovie(id: number){
    this.moviesService.getMovie(id).subscribe(movie=>{
      this.movie = movie;
      console.log(movie);
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
