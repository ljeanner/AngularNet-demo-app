namespace AngularNet_demo_app.Server.Services
{
    public interface IWeatherForecastService
    {
        IEnumerable<WeatherForecast> getWeatherForecast();
        WeatherForecast GetWeatherForecastByDate(DateTime date); // New method
    }
}
