import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { AppSettingsService } from '@core/service/app-settings.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy  {
  isDark = false ;
  showDownArrow = true ;
  subs = new SubSink() ;

  stepsToClassify = [
    {
      icon: 'add_a_photo',
      description: 'Capture a photo of leaf of a particular plant that needs to be checked.'
    },
    {
      icon: 'cloud_upload',
      description: 'Upload that image to the dedicated server from the provided form.'
    },
    {
      icon: 'receipt_long',
      description: 'Server will give a response with name it\'s type & it\'s prediction score.'
    }
  ] ;

  constructor(private conf: AppSettingsService, private mediaObserver: MediaObserver){
    this.subs.sink = this.conf.darkMode.subscribe( value => {
      this.isDark = value ;
    }) ;

    this.subs.sink = this.mediaObserver.asObservable().subscribe( change => {
      console.log(change[0].mqAlias) ;
    }) ;
  }

  onScroll(event: any): void{
    if (event.target.scrollTop > 150){
      this.showDownArrow = false ;
    }
    else{
      this.showDownArrow = true ;
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe() ;
  }
}
