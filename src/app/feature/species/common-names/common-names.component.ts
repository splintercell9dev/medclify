import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-names',
  templateUrl: './common-names.component.html',
  styleUrls: ['./common-names.component.scss']
})
export class CommonNamesComponent implements OnInit {

  @Input() names!: string[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
