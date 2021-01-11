import { Component, Input, OnInit } from '@angular/core';
import { Images } from '@core/model/interface';

@Component({
  selector: 'app-info-images',
  templateUrl: './info-images.component.html',
  styleUrls: ['./info-images.component.scss']
})
export class InfoImagesComponent implements OnInit {

  // tslint:disable-next-line: no-non-null-assertion
  @Input() images !: Images ;
  showNull = false ;
  constructor(){}

  ngOnInit(): void {
    if (this.images.flower == null && this.images.fruit == null &&this.images.leaf == null){
      this.showNull = true ;
    }
    else{
      this.showNull = false ;
    }
  }

}
