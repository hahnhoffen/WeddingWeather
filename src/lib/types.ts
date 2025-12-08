export interface CityDto {
  id: string;
  name: string;
  country: string;
}

export interface WeatherSearchParams {
  cityId: string;
  date: string;
}

export interface WeatherPredictionResponse {
  cityName: string;
  date: string;
  probabilitySunny: number;
  probabilityCloudy: number;
  probabilityRain: number;
  averageTemperatureC: number;
}