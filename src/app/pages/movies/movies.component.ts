import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  popularMovies: any = [];

  searchValue: any ;

  searchResult: any = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((response) => {
      this.popularMovies = response;
    });

    // this.searchValue="Hello";

  }

  // searchChanged(){
  //   console.log(this.searchValue);
  //   this.moviesService.searchMoviesQuery(this.searchValue).subscribe((response:any) => {
  //     console.log(response.results);
  //   });
  // }

}
