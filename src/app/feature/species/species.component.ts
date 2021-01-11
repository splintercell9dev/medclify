import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PlantFullInfo } from '@core/model/interface';
import { ApiService } from '@core/service/api.service';
import { AppSettingsService } from '@core/service/app-settings.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})

export class SpeciesComponent implements OnInit, OnDestroy {

  isDark = false ;
  backColor = '#ddd' ;
  animType: 'progress' | 'progress-dark' ;
  index: string ;
  info?: PlantFullInfo ;

  error = false ;

  subs = new SubSink() ;

  constructor(private route: ActivatedRoute, private conf: AppSettingsService, private api: ApiService,private title: Title){
    this.animType = 'progress' ;
    this.index = this.route.snapshot.params.id ;
    this.subs.sink = this.conf.darkMode.subscribe(value => {
      this.isDark = value ;
      this.backColor = this.isDark ? 'rgba(255,255,255,0.1)' : '#ddd' ;
      this.animType = this.isDark ? 'progress-dark' : 'progress' ;
    }) ;
  }

  ngOnInit(): void {
    const num = parseInt(this.index, 10) ;
    if ( !isNaN(num) ){
      if ( num >= 0 && num < 43 ){
        this.subs.sink = this.api.getFullInfo(num).subscribe( val => {
          this.info = val ;
          this.error = false ;
          this.title.setTitle(`Medclify | ${val.common_name}`) ;
        },
        err => {
          console.log(err) ;
          this.error = true ;
          this.title.setTitle(`Medclify | Error Occurred`) ;
        }) ;
      }
      else{
        this.error = true ;
      }
    }
    else{
      this.error = true ;
    }
  }

  ngOnDestroy(): void{
    this.subs.unsubscribe() ;
  }

}
