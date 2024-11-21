using AngularNet_demo_app.Server;
using AngularNet_demo_app.Server.Controllers;
using AngularNet_demo_app.Server.Services;
using FluentAssertions;
using Microsoft.Extensions.Logging;
using Moq;

namespace Weather.Tests.Controllers
{
    public class WeatherForecastControllerShould
    {
        [Theory]
        [InlineData(true, false, "logger")]
        [InlineData(false, true, "weatherForecastService")]
        public void Constructor_WithNullParams_Throw(bool nullLogger, bool nullWeatherForecastService, string errorMessage)
        {
            //Arrange
            var logger = nullLogger ? null : Mock.Of<ILogger<WeatherForecastController>>();
            var weatherForecastService = nullWeatherForecastService ? null : Mock.Of<IWeatherForecastService>();
            
            //Act
            Action act = () => _ = new WeatherForecastController(logger, weatherForecastService);

            //Assert
            act.Should().Throw<ArgumentNullException>().And.ParamName.Should().Be(errorMessage);

        }

        [Fact]
        public void Get_Succeeeds()
        {
            var logger = Mock.Of<ILogger<WeatherForecastController>>();
            var weatherForecastService = new Mock<IWeatherForecastService>(MockBehavior.Strict);

            var forecasts = new WeatherForecast[]
            {
                new WeatherForecast { Date = DateOnly.FromDateTime(DateTime.Now.AddDays(1)), TemperatureC = 1, Summary = "Cold" },
                new WeatherForecast { Date = DateOnly.FromDateTime(DateTime.Now.AddDays(2)), TemperatureC = 2, Summary = "Hot" }
            };

            weatherForecastService.Setup(x => x.getWeatherForecast()).Returns(forecasts);

            var controller = new WeatherForecastController(logger, weatherForecastService.Object);

            var result = controller.Get();
            result.Should().NotBeNull();
            result.Should().BeOfType<WeatherForecast[]>();
            result.Should().HaveCount(2);
            result.Should().BeEquivalentTo(forecasts);
        }
    }
}