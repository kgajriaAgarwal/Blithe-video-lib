import mainApiService from "./apiService";

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