import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {


  @Input() query : string = "";


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      console.log(params.searchValue);
    })
  }

}
