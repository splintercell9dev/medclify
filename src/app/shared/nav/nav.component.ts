import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppSettingsService } from '@core/service/app-settings.service';
import { UploadDialogComponent } from '@shared/components/upload-dialog/upload-dialog.component';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  light = true ;
  isdDarkTheme = false ;
  subs = new SubSink() ;

  constructor(private conf: AppSettingsService, private dialog: MatDialog, private http: HttpClient){
    this.subs.sink = this.conf.darkMode.subscribe( value => {
      this.isdDarkTheme = value ;
    }) ;
  }

  ngOnInit(): void {
  }

  toggle(): void{
    this.light = !this.light ;
  }

  toggleTheme(): void{
    this.conf.toggleDarkMode() ;
  }

  openUploadDialog(): void{
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      disableClose: true,
      width: '50vw',
      minWidth: '350px',
      maxWidth: '50vw'
    }) ;

    this.subs.sink = dialogRef.afterClosed().subscribe( result => {

      if (result){
        const formData = new FormData() ;
        formData.append('image', result) ;

        this.subs.sink = this.http.post('http://localhost:3000/api/classify', formData).subscribe( (val) => {
          console.log(val) ;
        }) ;
      }

    }) ;
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe() ;
  }
}
