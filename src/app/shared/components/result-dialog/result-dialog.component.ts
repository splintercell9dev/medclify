import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PlantLimitedInfo } from '@core/model/interface';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})

export class ResultDialogComponent implements OnInit {
  backgroundUrl: string ;

  // tslint:disable-next-line: max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data: PlantLimitedInfo, private route: Router, private dialogRef: MatDialogRef<ResultDialogComponent>){
    this.backgroundUrl = data.image_url ? data.image_url : './assets/images/dummy.png' ;
  }

  ngOnInit(): void {
    console.log(this.data) ;
  }

  routeToSpecies(): void{
    this.route.navigate([this.data.link]) ;
    this.dialogRef.close() ;
  }

}
