import { trigger, style, state, transition, animate } from '@angular/animations';
import { IMAGES_SIZES } from './../../constants/images-sizes';
import { TvService } from '../../services/tv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-show-data',
  templateUrl: './tv-show-data.component.html',
  styleUrls: ['./tv-show-data.component.scss'],
  animations: [
    trigger('slideFade',[
      state('void',style({opacity:0})),
      transition('void <=> *',[animate('3s')])
    ])
  ]
})
export class TvShowDataComponent implements OnInit {

  baseUrl : string = "https://api.themoviedb.org/3/tv/";

  apiKey: string = "api_key=4972464e7c5458ebaaf29cb554132bd6";

  imgSize = IMAGES_SIZES;

  TVShow : any = [];

  showCredits:any = [];

  showImages : any = [];

  showVideos : any = [];

  constructor(private route: ActivatedRoute, private TvService: TvService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      // console.log(params.id);
      this.TvService.getTvShow(params.id).subscribe((response) => {
        this.TVShow = response;
        // console.log(this.TVShow);
      });

      this.TvService.getCredits(params.id).subscribe((response:any) => {
        this.showCredits = response.cast;
        // console.log(this.showCredits);
      });

      this.TvService.getImages(params.id).subscribe((response:any) => {
        this.showImages = response.backdrops;
        // console.log(this.showCredits);
      });

      this.TvService.getVideos(params.id).subscribe((response:any) => {
        this.showVideos = response.results;
        // console.log(this.showCredits);
      });


    });

    
  }

  // getTvShowData(){
  //   this.TvService.getTvShow().subscribe((response) => {

  //   });
  // }

}
