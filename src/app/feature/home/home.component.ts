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
      description: 'Capture a photo of leaf of a plant that needs to be classified.'
    },
    {
      icon: 'cloud_upload',
      description: 'Upload that image to the server for classification.'
    },
    {
      icon: 'receipt_long',
      description: 'Response from serve contains small details about that species'
    }
  ] ;

  constructor(private conf: AppSettingsService){
    this.subs.sink = this.conf.darkMode.subscribe( value => {
      this.isDark = value ;
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
