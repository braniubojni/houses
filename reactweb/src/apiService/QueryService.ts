import { useQuery, useMutation } from 'react-query';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import config from '../config/config';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: config.baseApiUrl, // Replace with your API base URL
  timeout: 5000, // Set the timeout value (in milliseconds) as per your requirements
  headers: {
    'Content-Type': 'application/json',
  },
});

// Create a method for making GET requests using react-query
export function useGet<T>(queryKey: string, url: string, params = {}) {
  return useQuery<T>(queryKey, async () => {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  });
}

// Create a method for making POST requests using react-query
export function usePost<T>(queryKey: string, url: string, data = {}): any {
  return useMutation<T, unknown, any, unknown>(async (requestData) => {
    const response: AxiosResponse<T> = await axiosInstance.post(url, requestData);
    return response.data;
  });
}
