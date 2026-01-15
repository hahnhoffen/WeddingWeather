namespace WeddingWeather.Application.Weather;

public class WeatherService : IWeatherService
{
    public object GetWeather(string cityId, string date)
    {
        return new
        {
            cityId,
            date,
            summary = new
            {
                avgTemperatureMax = 22.4,
                avgTemperatureMin = 14.1,
                rainProbability = 28.0,
                avgPrecipitation = 1.6,
                avgSunshineHours = 7.4,
                avgWindSpeed = 4.8,
                confidence = 82,
                overallScore = 74,
                riskLevel = "low"
            }
        };
    }
}