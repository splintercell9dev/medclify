import { Component, Input, OnInit } from '@angular/core';
import { Synonym } from '@core/model/interface';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.scss']
})
export class SynonymsComponent implements OnInit {

  @Input() synonyms!: Synonym[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
