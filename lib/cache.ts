export async function fetchWithCache<T>(url: string, options?: RequestInit): Promise<T> {
  const cacheKey = `cache-${url}`;
  
  // Check if data exists in memory cache
  const cachedData = sessionStorage.getItem(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  // Fetch fresh data
  const response = await fetch(url, options);
  const data = await response.json();

  // Store in memory cache
  sessionStorage.setItem(cacheKey, JSON.stringify(data));

  return data;
}

export function clearCache() {
  sessionStorage.clear();
}