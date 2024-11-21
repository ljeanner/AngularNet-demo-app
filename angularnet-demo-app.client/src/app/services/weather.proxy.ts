import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherForecast } from "../models/weather.model";

@Injectable()
export class WeatherProxy {
  private readonly apiUrl = 'weatherforecast';
  constructor(private http: HttpClient) {}

  getForecasts(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.apiUrl);
  }

}
