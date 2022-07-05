import { MoviesService } from './../../services/movies.service';
import { TvService } from './../../services/tv.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { GenresService } from 'src/app/services/genres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchValue: any ="";

  searchResult: any = [];

  MoviesList :any = [];

  query : string | null = null;




  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    // this.getPagedSearch(1);
    // this.searchChanged()
    // if(this.searchValue.length>0){
    //   console.log(this.searchValue.length);
    // }
  }

  getPagedSearch(page: number){
    this.moviesService.searchMoviesQuery(this.searchValue,page).subscribe((response:any) => {
      // console.log("Query = ",this.searchValue);
      this.MoviesList = response.results ;
      // console.log(this.MoviesList);
    });
  }

  paginate(event: any){
    // console.log(event.page);
    this.getPagedSearch(event.page+1);
  }
  // @HostListener(flag)
  // routerPage(){
  //   this.router.navigateByUrl('/search/'+this.query);
  //   // console.log(this.query);
  //   return;
  // }

  searchChanged(){
    // console.log(this.searchValue);
    // this.moviesService.searchMoviesQuery(this.searchValue).subscribe((response:any) => {
    //   console.log(response.results);
    // });
    this.query=this.searchValue;
    if(this.searchValue.length!=0) this.getPagedSearch(1);
    
  }

}
