import { TvService } from '../../services/tv.service'
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-item-banner',
  templateUrl: './tv-item-banner.component.html',
  styleUrls: ['./tv-item-banner.component.scss']
})
export class TvItemBannerComponent implements OnInit {

  @Input() title='Popular Tv Shows';

  tvShowList:any = [];

  tvShowType = "popular";


  constructor(private TV: TvService) { }

  ngOnInit(): void {
    this.getTvShowType();
    this.getPagedTvShows(1);

  }

  getTvShowType(){
    if(this.title=="Popular Tv Shows")this.tvShowType="popular";
    if(this.title=="Tv Airing Today")this.tvShowType="airing_today";
    if(this.title=="Top Rated Tv Shows")this.tvShowType="top_rated";
    if(this.title=="Tv On The Air")this.tvShowType="on_the_air";
  }

  getPagedTvShows(page: number){
    this.TV.searchTvShows(page , this.tvShowType).subscribe((tvShowList:any) => {
      this.tvShowList = tvShowList.results ;
      // console.log(tvShowList);
    })
  }

  paginate(event: any){
    // console.log(event.page);
    this.getPagedTvShows(event.page+1);
  }

}
