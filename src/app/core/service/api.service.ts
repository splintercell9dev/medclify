import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlantFullInfo, PlantLimitedInfo } from '@core/model/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  requestUrl = '/api/' ;
  constructor(private http: HttpClient){}

  classifyImage(data: FormData): Observable<PlantLimitedInfo>{
    return this.http.post<PlantLimitedInfo>(`${this.requestUrl}classify`, data) ;
  }

  getFullInfo(index: number): Observable<PlantFullInfo>{
    return this.http.get<PlantFullInfo>(`${this.requestUrl}species/${index}`) ;
  }

  test(): Observable<any>{
    return this.http.get(`${this.requestUrl}test`) ;
  }
}
