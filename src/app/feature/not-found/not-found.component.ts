import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '@core/service/app-settings.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  isDark = false ;
  subs = new SubSink() ;

  constructor(private conf: AppSettingsService){
    this.subs.sink = this.conf.darkMode.subscribe( val => {
      this.isDark = val ;
    });
  }

  ngOnInit(): void {
  }

}
