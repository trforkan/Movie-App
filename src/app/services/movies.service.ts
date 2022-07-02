import { Movie, MovieDto, MovieVideoDto, Photo } from './../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl : string = "https://api.themoviedb.org/3/movie/";

  apiKey: string = "api_key=4972464e7c5458ebaaf29cb554132bd6";

  constructor(private http: HttpClient) { }

  // getMovies(movieType : string = 'upcoming', count = 15){
  //   return this.http.get<MovieDto>(`${this.baseUrl}${movieType}${this.apiKey}`)
  //   .pipe(switchMap(response =>{
  //     return of(response.results.slice(0, count));
  //   }))
  // }
  getMovies(movieType: string = 'upcoming', count = 20 ){
    return this.http.get<MovieDto>(`${this.baseUrl}${movieType}?${this.apiKey}`).pipe(
      switchMap((response)=>{
        return of (response.results.slice(0,count));
      })
    );
  } 

  searchMovies(page: number, movieType: string){
    return this.http.get<MovieDto>(`${this.baseUrl}${movieType}?page=${page}&${this.apiKey}`).pipe(
      switchMap((response)=>{
        return of (response.results.slice(0,20));
      })
    );
  }

  getMovieVideos(id: number){
    return this.http.get<MovieVideoDto>(`${this.baseUrl}${id}/videos?${this.apiKey}`).pipe(
      switchMap((response)=>{
        return of (response.results);
      })
    ); 
  }

  getMoviePhoto(id: number) {
    return this.http.get<Photo>(`${this.baseUrl}${id}/images?${this.apiKey}`).pipe(
      switchMap((response)=>{
        return of (response.backdrops);
      })
    ); 
  }

  getTvs(movieType: string = 'upcoming', count = 20 ){
    return this.http.get<MovieDto>(`${this.baseUrl}${movieType}?${this.apiKey}`).pipe(
      switchMap((response)=>{
        return of (response.results.slice(0,count));
      })
    ); 
  }

  

  getMovie(id: number) {
    return this.http.get<Movie>(`${this.baseUrl}${id}?${this.apiKey}`);
  }

}
