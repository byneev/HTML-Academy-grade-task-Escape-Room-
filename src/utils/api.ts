import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { APIRoute, API_TIMEOUT, HTTPCode } from './const';

export const createAPI = (PageNotFoundCallback : () => void) => {
  const api : AxiosInstance = axios.create({
    baseURL: APIRoute.Base,
    timeout: API_TIMEOUT,
  })

  api.interceptors.response.use(
    (response : AxiosResponse) => {
      return response;
    },
    (error : AxiosError) => {
      if (error.response?.status === HTTPCode.NotFound) {
        PageNotFoundCallback();
      }
      return Promise.reject(error);
    })
  return api;
}
