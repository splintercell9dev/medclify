import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '@core/service/app-settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  light = true ;
  isdDarkTheme = false ;
  subs: Subscription ;
  constructor(private conf: AppSettingsService){
    this.subs = this.conf.darkMode.subscribe( value => {
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
}
