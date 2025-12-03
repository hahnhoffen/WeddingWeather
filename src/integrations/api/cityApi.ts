import { apiClient } from "./client";

export interface CityDto {
  id: string;
  name: string;
  country: string;
}

export const cityApi = {
  getAll: () => apiClient.get<CityDto[]>("/cities"),
};
