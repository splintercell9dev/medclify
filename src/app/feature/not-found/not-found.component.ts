import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  constructor(private conf: AppSettingsService, private title: Title){
    this.subs.sink = this.conf.darkMode.subscribe( val => {
      this.isDark = val ;
    });
    this.title.setTitle('Medclify | 404 Not Found') ;
  }

  ngOnInit(): void {
  }

}
