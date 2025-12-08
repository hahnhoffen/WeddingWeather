import { apiClient } from "./client";
import type {
  WeatherSearchParams,
  WeatherPredictionResponse,
} from "../../lib/types";

export const weatherApi = {
  getPrediction: (params: WeatherSearchParams) => {
    const query = new URLSearchParams({
      cityId: params.cityId,
      date: params.date,
    }).toString();

    return apiClient.get<WeatherPredictionResponse>(`/weather?${query}`);
  },
};