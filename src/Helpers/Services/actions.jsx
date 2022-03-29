import mainApiService from "./apiService";
import { setLocalStorage } from "../Helpers/Utils";

// Action to perform Login
export const actionLogin = async (data) => {
  const response = await mainApiService("login", data);
  if (response.data.encodedToken) {
    setLocalStorage("authData", response.data.encodedToken);
  }
  // dispatch({ type: Actions.LOGIN, data: response.data });
  return response;
};

// Action to perform Signup
export const actionSignup = async (data) => {
  const response = await mainApiService("signup", data);
  if (response.data.encodedToken) {
    setLocalStorage("authData", response.data.encodedToken);
  }
  // dispatch({ type: Actions.LOGIN, data: response.data });
  return response;
};

//action to get All Categories
export const getAllCategory = async (data) => {
    const response = await mainApiService("getAllCategory", data);
    return response;
  };

//Action to get Category data by id
export const getCategoryById = async (data) => {
  const response = await mainApiService("getCategoryById", data);
  return response;
};


//Action to get videos
export const getVideos = async (data) => {
  const response = await mainApiService("getVideos", data);
  return response;
};