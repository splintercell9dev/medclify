import { Component, Input, OnInit } from '@angular/core';
import { PlantFullInfo, PlantLimitedInfo } from '@core/model/interface';

@Component({
  selector: 'app-info-limited',
  templateUrl: './info-limited.component.html',
  styleUrls: ['./info-limited.component.scss']
})
export class InfoLimitedComponent implements OnInit {

  @Input() info!: PlantFullInfo ;
  constructor() { }

  ngOnInit(): void {
  }

}
