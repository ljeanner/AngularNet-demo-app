import { TestBed } from "@angular/core/testing";
import { WeatherService } from "./weather.service"; // Import the WeatherService class

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
  });
});


describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
  });

  describe('avgTemp', () => {
    it('should return the average temperature in Celsius', () => {
      const temps = [32, 50, 68, 86]; // Fahrenheit temperatures
      const expectedAvgTemp = 20; // Expected average temperature in Celsius

      const result = service.avgTemp(temps);

      expect(result).toEqual(expectedAvgTemp);
    });

    it('should return 0 if the input array is empty', () => {
      const temps: number[] = [];
      const expectedAvgTemp = 0;

      const result = service.avgTemp(temps);

      expect(result).toEqual(expectedAvgTemp);
    });

    it('should handle negative Fahrenheit temperatures', () => {
      const temps = [-4, 14, 32, 50]; // Fahrenheit temperatures
      const expectedAvgTemp = -20; // Expected average temperature in Celsius

      const result = service.avgTemp(temps);

      expect(result).toEqual(expectedAvgTemp);
    });
  });
});


// base on this json response
// generate mock data for testing
/** 
 * [
    {
        "date": "2024-09-12",
        "temperatureC": 53,
        "temperatureF": 127,
        "summary": "Sweltering"
    },
    {
        "date": "2024-09-13",
        "temperatureC": 52,
        "temperatureF": 125,
        "summary": "Sweltering"
    },
    {
        "date": "2024-09-14",
        "temperatureC": 4,
        "temperatureF": 39,
        "summary": "Cool"
    },
    {
        "date": "2024-09-15",
        "temperatureC": 48,
        "temperatureF": 118,
        "summary": "Mild"
    },
    {
        "date": "2024-09-16",
        "temperatureC": 16,
        "temperatureF": 60,
        "summary": "Hot"
    }
]
*/

const mockWeatherData = [
  {
    date: "2024-09-12",
    temperatureC: 53,
    temperatureF: 127,
    summary: "Sweltering"
  },
  {
    date: "2024-09-13",
    temperatureC: 52,
    temperatureF: 125,
    summary: "Sweltering"
  },
  {
    date: "2024-09-14",
    temperatureC: 4,
    temperatureF: 39,
    summary: "Cool"
  },
  {
    date: "2024-09-15",
    temperatureC: 48,
    temperatureF: 118,
    summary: "Mild"
  },
  {
    date: "2024-09-16",
    temperatureC: 16,
    temperatureF: 60,
    summary: "Hot"
  }
];
