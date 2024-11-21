import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from './models/weather.model';
import { WeatherProxy } from './services/weather.proxy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [WeatherProxy]
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  constructor(private weatherProxy: WeatherProxy) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
   this.weatherProxy.getForecasts().subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'angularnet-demo-app.client';
}
