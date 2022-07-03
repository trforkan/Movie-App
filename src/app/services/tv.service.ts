import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  baseUrl : string = "https://api.themoviedb.org/3/tv/";

  // tvShowType = "popular";

  apiKey: string = "api_key=4972464e7c5458ebaaf29cb554132bd6";
  
  constructor(private http: HttpClient) { }

  getTvPopular(){
    return this.http.get(`${this.baseUrl}popular?${this.apiKey}`);
  }

  searchTvShows(page:number , type: string){
    // console.log(type," ",page);
    return this.http.get(`${this.baseUrl}${type}?page=${page}&${this.apiKey}`);
  }

  getTvShow(id:number){
    return this.http.get(`${this.baseUrl}${id}?${this.apiKey}`);
  }

  getCredits(id:number) {
    return this.http.get(`${this.baseUrl}${id}/credits?${this.apiKey}`);
  }

  getImages(id:number) {
    return this.http.get(`${this.baseUrl}${id}/images?${this.apiKey}`);
  }

  getVideos(id:number) {
    return this.http.get(`${this.baseUrl}${id}/videos?${this.apiKey}`);
  }
}
