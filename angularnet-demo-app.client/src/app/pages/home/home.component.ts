import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../../models/weather.model';
import { WeatherProxy } from '../../services/weather.proxy';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [WeatherProxy, WeatherService]
})
export class HomeComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  public avgTemp: number = 0;

  constructor(
    private weatherProxy: WeatherProxy,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.getForecasts();

  }

  getForecasts() {
    this.weatherProxy.getForecasts().subscribe(
      (result) => {
        this.forecasts = result;
        this.avgTemp = this.getAvgTemp();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAvgTemp(): number {
    return this.weatherService.avgTemp(
      this.forecasts.map((f) => f.temperatureF)
    );
  }
}
