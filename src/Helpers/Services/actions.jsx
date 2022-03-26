import mainApiService from "./apiService";

//action to get All Categories
export const getAllCategory = async (data) => {
    const response = await mainApiService("getAllCategory", data);
    return response;
  };