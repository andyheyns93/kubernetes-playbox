import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from './weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(
    private readonly http: HttpClient
  ) { }

 public getWeatherForecast(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>('http://localhost:8080/weatherforecast');
 }
}
