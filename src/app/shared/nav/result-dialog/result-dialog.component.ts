import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlantLimitedInfo } from '@core/model/interface';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})

export class ResultDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PlantLimitedInfo){}

  ngOnInit(): void {}

}
