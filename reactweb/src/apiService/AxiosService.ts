import axios, { AxiosInstance, AxiosResponse } from 'axios';
import config from '../config/config';

class AxiosService {
  api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: config.baseApiUrl, // Replace with your API base URL
      timeout: 5000, // Set the timeout value (in milliseconds) as per your requirements
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Create a method for making GET requests
  get(url: string, params = {}): Promise<any | any[] | unknown> {
    return this.api
      .get(url, { ...params })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  // Create a method for making POST requests
  post(url: string, data = {}): Promise<AxiosResponse<any, any>> {
    return this.api
      .post(url, data)
      .then((response) => response.data)
      .catch((error) => {
        console.error('POST request error:', error);
        throw error;
      });
  }
}

export default AxiosService;
