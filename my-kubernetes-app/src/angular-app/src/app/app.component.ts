import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from './weather-forecast.model';
import { WeatherForecastService } from './weather-forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weatherForecast$: Observable<WeatherForecast[]>;

  constructor(
    private readonly weatherForecastService: WeatherForecastService
  ) {
  }

  ngOnInit(): void {
    this.weatherForecast$ = this.weatherForecastService.getWeatherForecast();
  }
}
