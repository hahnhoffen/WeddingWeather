import { apiClient } from "./client";
import type { CityDto } from "../../lib/types";

export const cityApi = {
  getAll: () => apiClient.get<CityDto[]>("/cities"),
};
