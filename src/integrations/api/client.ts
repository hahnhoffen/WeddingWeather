const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5063";

type HttpMethod = "GET" | "POST";

interface RequestOptions {
  method?: HttpMethod;
  body?: unknown;
  signal?: AbortSignal;
}

async function apiRequest<TResponse>(
  path: string,
  options: RequestOptions = {}
): Promise<TResponse> {
  const url = `${API_BASE_URL}${path}`;

  const response = await fetch(url, {
    method: options.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    signal: options.signal,
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<TResponse>;
}

export const apiClient = {
  get: <TResponse>(path: string, signal?: AbortSignal) =>
    apiRequest<TResponse>(path, { method: "GET", signal }),

  post: <TResponse>(path: string, body?: unknown, signal?: AbortSignal) =>
    apiRequest<TResponse>(path, { method: "POST", body, signal }),
};
