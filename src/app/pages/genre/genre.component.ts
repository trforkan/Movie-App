import { GenresService } from './../../services/genres.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  moviesList: any = [];
  tvShowList: any = [];

  genreId : any ;

  constructor(private route: ActivatedRoute , private genreService: GenresService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      // console.log(params.id);
      this.genreId=params.id;
      
    })
    this.getPagedMovies(1);
    this.getPagedTvShows(1);
  }

  getPagedMovies(page: number){
    this.genreService.getGenreMovieItems(this.genreId,page).subscribe((response:any) => {
    this.moviesList=response.results;
      // console.log(this.moviesList);
    });
  }
  getPagedTvShows(page: number){
    this.genreService.getGenreTvShowItems(this.genreId,page).subscribe((response:any) => {
    this.tvShowList=response.results;
      // console.log(this.tvShowList);
    });
  }

  paginate(event: any){
    // console.log(event.page);
    this.getPagedMovies(event.page+1);
    // this.getPagedTvShows(event.page+1);
  }
  paginate2(event: any){
    // console.log(event.page);
    // this.getPagedMovies(event.page+1);
    this.getPagedTvShows(event.page+1);
  }
}
