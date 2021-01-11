import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edible-uses',
  templateUrl: './edible-uses.component.html',
  styleUrls: ['./edible-uses.component.scss']
})
export class EdibleUsesComponent implements OnInit {

  @Input() euses!: string[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
