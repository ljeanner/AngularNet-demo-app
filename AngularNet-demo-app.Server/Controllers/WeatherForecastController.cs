using AngularNet_demo_app.Server.Services;
using Ardalis.GuardClauses;
using Microsoft.AspNetCore.Mvc;

namespace AngularNet_demo_app.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        private IWeatherForecastService _weatherForecastService; 

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IWeatherForecastService weatherForecastService)
        {
            _logger = Guard.Against.Null(logger);
            _weatherForecastService = Guard.Against.Null(weatherForecastService);
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return _weatherForecastService.getWeatherForecast();
        }

        // To do : Create a function that returns a single weather forecast for a given date
    }
}
