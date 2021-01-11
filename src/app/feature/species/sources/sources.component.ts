import { Component, Input, OnInit } from '@angular/core';
import { Source } from '@core/model/interface';


@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit {

  @Input() sources!: Source[];
  constructor() { }

  ngOnInit(): void {
  }

}
