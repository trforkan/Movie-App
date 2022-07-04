import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.scss']
})
export class GenreItemComponent implements OnInit {

  @Input() itemData: any = [];

  @Input() itemType: string = "";

  imgSizes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
