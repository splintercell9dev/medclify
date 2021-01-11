import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-uses',
  templateUrl: './medical-uses.component.html',
  styleUrls: ['./medical-uses.component.scss']
})
export class MedicalUsesComponent implements OnInit {

  @Input() muses!: string[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
