import { MoviesService } from './../../services/movies.service';
import { TvService } from './../../services/tv.service';
import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchValue: any ;

  searchResult: any = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {

  }

  searchChanged(){
    // console.log(this.searchValue);
    // this.moviesService.searchMoviesQuery(this.searchValue).subscribe((response:any) => {
    //   console.log(response.results);
    // });
    
  }

}
