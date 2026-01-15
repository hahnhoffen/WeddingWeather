namespace WeddingWeather.Application.Cities;

public class CityService : ICityService
{
    public object GetCities()
    {
        return new[]
        {
            new { id = "stockholm", name = "Stockholm", countryCode = "SE" },
            new { id = "gothenburg", name = "Gothenburg", countryCode = "SE" },
            new { id = "malmo", name = "Malmö", countryCode = "SE" }
        };
    }
}
