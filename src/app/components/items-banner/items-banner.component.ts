import { MoviesService } from './../../services/movies.service';
import { Movie } from './../../models/movie';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss']
})
export class ItemsBannerComponent implements OnInit {

  // popularMoviesList: Movie[] = [];
  // upcomingMoviesList: Movie[] = [];
  // topRatedMoviesList: Movie[] = [];

  MoviesList: Movie[] = [];

  movieType: string ='upcoming';

  @Input() title: string ="";

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {

    if(this.title == 'Popular Movies'){
      this.movieType = 'popular';
    }
    if(this.title == 'upcoming Movies'){
      this.movieType = 'upcoming';
    }
    if(this.title == 'Top Rated Movies'){
      this.movieType = 'top_rated';
    }
    if(this.title == 'Now Playing Movies'){
      this.movieType = 'now_playing';
    }
    // console.log(this.movieType);
    this.getPagedMovies(1);

  }
  

  getPagedMovies(page: number){
    this.moviesService.searchMovies(page , this.movieType).subscribe(MoviesList => {
      this.MoviesList = MoviesList ;
      // console.log(MoviesList);
    })
  }

  paginate(event: any){
    console.log(event.page);
    this.getPagedMovies(event.page+1);
  }

}
