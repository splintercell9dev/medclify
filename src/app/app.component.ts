import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnDestroy } from '@angular/core';
import { AppSettingsService } from '@core/service/app-settings.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'medclify';
  isDarkTheme = false ;
  isLoading = false ;
  private subs = new SubSink() ;

  constructor(private conf: AppSettingsService, private overlay: OverlayContainer){
    this.subs.sink = this.conf.darkMode.subscribe( value => {
      this.isDarkTheme = value ;
      if (value){
        overlay.getContainerElement().classList.add('dark-theme') ;
      }
      else{
        overlay.getContainerElement().classList.remove('dark-theme') ;
      }
    }) ;
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe() ;
  }
}
