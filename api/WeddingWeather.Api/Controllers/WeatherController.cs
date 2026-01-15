using Microsoft.AspNetCore.Mvc;
using WeddingWeather.Application.Weather;

namespace WeddingWeather.Api.Controllers;

[ApiController]
public class WeatherController : ControllerBase
{
    private readonly IWeatherService _weatherService;

    public WeatherController(IWeatherService weatherService)
    {
        _weatherService = weatherService;
    }

    [HttpGet("weather")]
    public IActionResult GetWeather([FromQuery] string cityId, [FromQuery] string date)
    {
        var result = _weatherService.GetWeather(cityId, date);
        return Ok(result);
    }
}
