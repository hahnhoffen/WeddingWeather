namespace WeddingWeather.Application.Weather;

public interface IWeatherService
{
    object GetWeather(string cityId, string date);
}
