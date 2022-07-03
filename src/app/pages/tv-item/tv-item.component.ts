import { IMAGES_SIZES } from './../../constants/images-sizes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss']
})
export class TvItemComponent implements OnInit {

  @Input() itemData: any = [];
  @Input() tvShowType="";

  imgSizes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
