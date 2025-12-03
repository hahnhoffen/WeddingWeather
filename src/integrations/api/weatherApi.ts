import { apiClient } from "./client";

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

export const weatherApi = {
  getPrediction: (params: WeatherSearchParams) => {
    const query = new URLSearchParams({
      cityId: params.cityId,
      date: params.date,
    }).toString();

    return apiClient.get<WeatherPredictionResponse>(`/weather?${query}`);
  },
};