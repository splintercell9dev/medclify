import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  darkMode: BehaviorSubject<boolean> ;
  theme: string | null;
  isLoading = new BehaviorSubject<boolean>(false) ;
  constructor(private detector: DeviceDetectorService) {
    this.theme = localStorage.getItem('theme') ;
    if (!this.theme){
      this.theme = 'light' ;
      localStorage.setItem('theme', this.theme) ;
    }

    if (this.theme == 'light'){
      this.darkMode = new BehaviorSubject<boolean>(false) ;
    }
    else{
      this.darkMode = new BehaviorSubject<boolean>(true) ;
    }
  }

  private changeTheme(theme: string){
    this.theme = theme ;
    localStorage.setItem('theme', theme) ;
  }

  toggleDarkMode(): void{
    if (this.theme == 'light'){
      this.darkMode.next(true) ;
      this.changeTheme('dark') ;
    }
    else{
      this.darkMode.next(false) ;
      this.changeTheme('light') ;
    }
  }
}
