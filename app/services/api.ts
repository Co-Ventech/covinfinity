/**
 * API service for handling HTTP requests
 */

const API_BASE_URL = '/api';

/**
 * Generic fetch function with error handling
 */
async function fetchWithErrorHandling<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Basic CRUD operations
 */
export const apiService = {
  /**
   * GET request to fetch data
   */
  get: <T>(endpoint: string): Promise<T> => {
    return fetchWithErrorHandling<T>(`${API_BASE_URL}${endpoint}`);
  },

  /**
   * POST request to create data
   */
  post: <T, D = any>(endpoint: string, data: D): Promise<T> => {
    return fetchWithErrorHandling<T>(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },

  /**
   * PUT request to update data
   */
  put: <T, D = any>(endpoint: string, data: D): Promise<T> => {
    return fetchWithErrorHandling<T>(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  },

  /**
   * DELETE request to remove data
   */
  delete: <T>(endpoint: string): Promise<T> => {
    return fetchWithErrorHandling<T>(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
    });
  },
};
