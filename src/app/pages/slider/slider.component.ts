import { trigger, style, state, transition, animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('3s')])
    ])
  ]

})
export class SliderComponent implements OnInit {

  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;

  imgSizes = IMAGES_SIZES;

  currentSlideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    if(!this.isBanner == true){
      setInterval(()=>{
        this.currentSlideIndex++;
        this.currentSlideIndex%=this.items.length;
      },5000)
    }
    
    // console.log("from slider", this.items);
  }

}
