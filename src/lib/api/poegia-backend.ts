/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios"

// Define base URL or any other configuration you may need
const baseURL = "https://poegia-api.up.railway.app" // Replace with your API base URL

// Create Axios instance with base URL
const instance = axios.create({
  baseURL,
})

// Define function to handle errors
const handleError = (error: any) => {
  console.error("Request failed:", error)
  throw error
}

// Define types for request methods
type RequestMethod = "get" | "put" | "post" | "delete"

// Define generic function to make requests
const makeRequest = async <T>(
  method: RequestMethod,
  path: string,
  body?: any
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await instance.request<T>({
      method,
      url: path,
      data: body,
    })
    return response.data
  } catch (error) {
    return handleError(error)
  }
}

// Define functions for each HTTP method
export const get = <T>(path: string): Promise<T> => makeRequest<T>("get", path)

export const put = <T>(path: string, body: any): Promise<T> =>
  makeRequest<T>("put", path, body)

export const post = <T>(path: string, body: any): Promise<T> =>
  makeRequest<T>("post", path, body)

export const del = <T>(path: string, body?: any): Promise<T> =>
  makeRequest<T>("delete", path, body)
