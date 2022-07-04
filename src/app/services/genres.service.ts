import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  baseUrl : string = "https://api.themoviedb.org/3";

  apiKey: string = "api_key=4972464e7c5458ebaaf29cb554132bd6";

  val:any;

  constructor(private http: HttpClient) { }

  getGenres(){
    return this.http.get(`${this.baseUrl}/genre/movie/list?${this.apiKey}`);
  }

  getGenreMovieItems(id:number, page:number){
    // const URL = this.baseUrl+"/discover/movie?with_genres="+id+"&page="+page+"&"+this.apiKey;
    // console.log("URL = ",URL);
    return this.http.get(`${this.baseUrl}/discover/movie?with_genres=${id}&page=${page}&${this.apiKey}`);
  }
  getGenreTvShowItems(id:number, page:number){
    // const URL = this.baseUrl+"/discover/movie?with_genres="+id+"&page="+page+"&"+this.apiKey;
    // console.log("URL = ",URL);
    return this.http.get(`${this.baseUrl}/discover/tv?with_genres=${id}&page=${page}&${this.apiKey}`);
  }

}
