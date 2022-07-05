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

  constructor(private moviesService: MoviesService, private router: Router) { }

  ngOnInit(): void {
    
  }

}
