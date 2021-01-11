import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '@core/service/api.service';
import { AppSettingsService } from '@core/service/app-settings.service';
import { ResultDialogComponent } from '@shared/nav/result-dialog/result-dialog.component';
import { UploadDialogComponent } from '@shared/nav/upload-dialog/upload-dialog.component';
import { SubSink } from 'subsink';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  light = true ;
  isdDarkTheme = false ;
  subs = new SubSink() ;

  constructor(private conf: AppSettingsService, private dialog: MatDialog, private api: ApiService){
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
      minWidth: '300px',
      maxWidth: '50vw',
      closeOnNavigation: true
    }) ;

    dialogRef.afterClosed().subscribe( result => {
      if (result){
        const formData = new FormData() ;
        formData.append('image', result) ;

        this.subs.sink = this.api.classifyImage(formData).subscribe( val => {
          this.dialog.open(ResultDialogComponent, {
            width: '350px',
            disableClose: true,
            closeOnNavigation: true,
            data: val
          }) ;
        },
        (err) => {
          this.conf.showSnackBar('Error occurred while getting info from server!', 3000) ;
        }) ;
      }

    }) ;
  }

  openAboutDialog(): void{
    const dialog = this.dialog.open(AboutComponent, {
      disableClose: true,
      closeOnNavigation: true,
      width: '500px',
      maxWidth: '90vw'
    }) ;
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe() ;
  }
}
