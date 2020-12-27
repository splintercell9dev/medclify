import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnDestroy } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
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

  constructor(private conf: AppSettingsService, private overlay: OverlayContainer, private route: Router){
    this.subs.sink = this.conf.darkMode.subscribe( value => {
      this.isDarkTheme = value ;
      if (value){
        overlay.getContainerElement().classList.add('dark-theme')
      }
      else{
        overlay.getContainerElement().classList.remove('dark-theme')
      }
    }) ;
    
    this.subs.sink = this.conf.isLoading.subscribe( value => {
      this.isLoading = value ;
    }) ;

    this.subs.sink = this.route.events.subscribe( (event) =>{
      if (event instanceof NavigationStart){
        this.conf.isLoading.next(true) ;
      }
      else if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel){
        this.conf.isLoading.next(false) ;
      }
    }) ;
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe() ;
  }
}
