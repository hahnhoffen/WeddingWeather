using Microsoft.AspNetCore.Mvc;
using WeddingWeather.Application.Cities;

namespace WeddingWeather.Api.Controllers;

[ApiController]
public class CitiesController : ControllerBase
{
    private readonly ICityService _cityService;

    public CitiesController(ICityService cityService)
    {
        _cityService = cityService;
    }

    [HttpGet("cities")]
    public IActionResult GetCities()
    {
        var result = _cityService.GetCities();
        return Ok(result);
    }
}
