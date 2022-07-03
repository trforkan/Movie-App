import { trigger, state, style, transition, animate } from '@angular/animations';
import { IMAGES_SIZES } from './../../constants/images-sizes';
import { TvService } from '../../services/tv.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
  animations: [
    trigger('slideFade',[
      state('void',style({opacity:0})),
      transition('void <=> *',[animate('3s')])
    ])
  ]
})
export class TvShowsComponent implements OnInit {


  items:any = [];
  currentSlideIndex = 0;
  imgSizes = IMAGES_SIZES;

  @Input() title ="";

  tvShowList: any = [];

  tvShowType ="";

  constructor(private TV: TvService) { }

  ngOnInit(): void {

    this.TV.getTvPopular().subscribe((response:any) => {
      this.items=response.results;
      // console.log(this.items);

      setInterval(()=>{
        this.currentSlideIndex++;
        this.currentSlideIndex%=this.items.length;
      },5000)

    });
  }

  getTvShowType(){
    if(this.title == "Upcoming Tv Shows")this.tvShowType="upcoming";
    if(this.title == "Popular Tv Shows")this.tvShowType="upcoming";
    if(this.title == "Top Rated Tv Shows")this.tvShowType="upcoming";
    
  }

  getPagedTvShows(page: number){
    this.TV.searchTvShows(page , this.tvShowType).subscribe(tvShows => {
      this.tvShowList = tvShows ;
      // console.log(MoviesList);
    })
  }

  paginate(event: any){
    console.log(event.page);
    this.getPagedTvShows(event.page+1);
  }

}
