import { MoviesService } from './../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {


  searchValue : string = "";

  query: string | null = null ;

  MoviesList :any = [];

  itemVis = 0;


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    // this.getPagedSearch(1);
  }

  getPagedSearch(page: number){
    this.moviesService.searchMoviesQuery(this.searchValue,page).subscribe((response:any) => {
      this.MoviesList = response.results ;
      
      this.itemVis = this.MoviesList.length;
      console.log("items = ",this.itemVis);
      console.log(this.MoviesList);
      
    })
  }

  paginate(event: any){
    // console.log(event.page);
    this.getPagedSearch(event.page+1);
  }

  searchChanged(){

    this.query=this.searchValue;
    if(this.query.length!=0) this.getPagedSearch(1);

  }

}
