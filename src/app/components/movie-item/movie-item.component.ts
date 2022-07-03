import { MoviesService } from './../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Movie } from './../../models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() itemData : Movie | null = null;

  items: Movie[] = [];

  @Input() movieType : string ="";

  imgSizes= IMAGES_SIZES ;

  constructor(private movies: MoviesService) { }

  ngOnInit(): void {
    // this.movies.searchMovies(2,this.movieType).subscribe((response)=>{
    //   this.items = response ;
    // })
    // console.log(this.itemData);
  }

}
