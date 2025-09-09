import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.config.url} - ${response.status}`);
    return response;
  },
  (error) => {
    console.error(`API Error: ${error.config?.url} - ${error.response?.status}`, error.response?.data);
    return Promise.reject(error);
  }
);

// Portfolio API functions
export const portfolioAPI = {
  // Get all portfolio data at once
  getAllData: async () => {
    try {
      const response = await apiClient.get('/portfolio/all');
      return response.data;
    } catch (error) {
      console.error('Error fetching all portfolio data:', error);
      throw error;
    }
  },

  // Get hero section data
  getHeroData: async () => {
    try {
      const response = await apiClient.get('/portfolio/hero');
      return response.data;
    } catch (error) {
      console.error('Error fetching hero data:', error);
      throw error;
    }
  },

  // Get about section data
  getAboutData: async () => {
    try {
      const response = await apiClient.get('/portfolio/about');
      return response.data;
    } catch (error) {
      console.error('Error fetching about data:', error);
      throw error;
    }
  },

  // Get skills data
  getSkillsData: async () => {
    try {
      const response = await apiClient.get('/portfolio/skills');
      return response.data;
    } catch (error) {
      console.error('Error fetching skills data:', error);
      throw error;
    }
  },

  // Get projects data
  getProjectsData: async () => {
    try {
      const response = await apiClient.get('/portfolio/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects data:', error);
      throw error;
    }
  },

  // Get experience data
  getExperienceData: async () => {
    try {
      const response = await apiClient.get('/portfolio/experience');
      return response.data;
    } catch (error) {
      console.error('Error fetching experience data:', error);
      throw error;
    }
  },

  // Get recommendations data
  getRecommendationsData: async () => {
    try {
      const response = await apiClient.get('/portfolio/recommendations');
      return response.data;
    } catch (error) {
      console.error('Error fetching recommendations data:', error);
      throw error;
    }
  },

  // Get contact data
  getContactData: async () => {
    try {
      const response = await apiClient.get('/portfolio/contact');
      return response.data;
    } catch (error) {
      console.error('Error fetching contact data:', error);
      throw error;
    }
  },
};

// Contact API functions
export const contactAPI = {
  // Submit contact form
  submitMessage: async (messageData) => {
    try {
      const response = await apiClient.post('/contact/message', messageData);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact message:', error);
      throw error;
    }
  },
};

// Health check function
export const healthCheck = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};

// Error handler utility
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response;
    console.error(`API Error ${status}:`, data);
    
    switch (status) {
      case 404:
        return 'Data not found. Please try again later.';
      case 500:
        return 'Server error. Please try again later.';
      case 503:
        return 'Service unavailable. Please try again later.';
      default:
        return data?.detail || data?.message || 'An error occurred. Please try again.';
    }
  } else if (error.request) {
    // Request made but no response received
    console.error('Network Error:', error.request);
    return 'Network error. Please check your connection and try again.';
  } else {
    // Something else happened
    console.error('Error:', error.message);
    return 'An unexpected error occurred. Please try again.';
  }
};

export default apiClient;