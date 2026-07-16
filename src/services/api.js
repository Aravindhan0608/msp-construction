// Base URL for the backend API. Configure via .env (VITE_API_URL) so the
// same build can point at localhost in development and a real domain in
// production, instead of a hardcoded "http://localhost:5000".
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://msp-construction-backend.onrender.com/api';

class ApiRequestError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

/**
 * Thin wrapper around fetch that:
 * - prefixes the API base URL
 * - sets JSON headers by default
 * - attaches the admin auth token when present
 * - throws a consistent ApiRequestError with the server's message on failure
 */
async function apiRequest(path, { method = 'GET', body, token, headers = {} } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    // Response had no JSON body (e.g. some 204/500 edge cases) - that's fine.
  }

  if (!response.ok) {
    const message = data?.error || 'Something went wrong. Please try again.';
    throw new ApiRequestError(message, response.status);
  }

  return data;
}

export { apiRequest, ApiRequestError };
