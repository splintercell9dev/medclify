import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppSettingsService } from '@core/service/app-settings.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  isDark = false ;
  subs = new SubSink() ;
  constructor(private conf: AppSettingsService){
    this.subs.sink = this.conf.darkMode.subscribe( val => {
      this.isDark = val ;
    }) ;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe() ;
  }


}
