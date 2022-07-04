import { GenresService } from 'src/app/services/genres.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres : any = [];

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getGenres().subscribe((response:any) => {
      this.genres = response.genres;
      // console.log(this.genres);
    })
  }

}
