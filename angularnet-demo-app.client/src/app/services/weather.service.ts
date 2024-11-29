import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
  constructor() {}

  // a very ugly function
  public avgTemp(temps: number[]): number {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < temps.length; i++) {
      sum += temps[i];
      count++;
    }

    let a = sum / count;
    let b = ((a - 32) * 5) / 9;

    return b;
  }
}
