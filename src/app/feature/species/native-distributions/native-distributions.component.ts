import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-native-distributions',
  templateUrl: './native-distributions.component.html',
  styleUrls: ['./native-distributions.component.scss']
})
export class NativeDistributionsComponent implements OnInit {

  @Input() places!: string[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
