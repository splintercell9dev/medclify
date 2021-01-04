import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  darkMode: BehaviorSubject<boolean> ;
  theme: string | null;

  constructor(private detector: DeviceDetectorService, private toast: MatSnackBar) {
    this.theme = localStorage.getItem('theme') ;
    if (!this.theme){
      this.theme = 'light' ;
      localStorage.setItem('theme', this.theme) ;
    }

    if (this.theme === 'light'){
      this.darkMode = new BehaviorSubject<boolean>(false) ;
    }
    else{
      this.darkMode = new BehaviorSubject<boolean>(true) ;
    }
  }

  private changeTheme(theme: string): void{
    this.theme = theme ;
    localStorage.setItem('theme', theme) ;
  }

  toggleDarkMode(): void{
    if (this.theme === 'light'){
      this.darkMode.next(true) ;
      this.changeTheme('dark') ;
    }
    else{
      this.darkMode.next(false) ;
      this.changeTheme('light') ;
    }
  }

  showSnackBar(msg: string, time: number): void{
    this.toast.open(msg, undefined, {
      duration: time
    }) ;
  }
}
