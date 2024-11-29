import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
  constructor() {}

  public avgTemp(temps: number[]): number {
    const total = temps.reduce((sum, temp) => sum + temp, 0);
    const averageFahrenheit = total / temps.length;
    const averageCelsius = ((averageFahrenheit - 32) * 5) / 9;
    return averageCelsius;
  }
}
