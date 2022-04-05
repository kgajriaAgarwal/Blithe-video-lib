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

//Action to get Category data by id
export const getVideoById = async (data) => {
  const response = await mainApiService("getVideoById", data);
  return response;
};

//Action to get Liked videos
export const getLikedVideos = async (data) => {
  const response = await mainApiService("getLikedVideos", data);
  return response;
};

//ACTION TO add To Liked Videos LIST..
export const actionAddToLikedVideosList = async (data) => {
  const response = await mainApiService("actionAddToLikedVideosList", data);
  return response;
};

//PLAYLIST
//ACTION TO get all playlists..
export const getplaylists = async (data) => {
  const response = await mainApiService("getplaylists", data);
  return response;
};

//Action to Create Playlist
export const actionCreatePlaylist = async (data) => {
  const response = await mainApiService("actionCreatePlaylist", data);
  return response;
};

//Action to delete a playlist from the playlists of the user in the db
export const actionDeletePlaylist = async (data) => {
  const response = await mainApiService("actionDeletePlaylist", data);
  return response;
};

//Action to get playlist by id
export const getPlaylistById = async (data) => {
  const response = await mainApiService("getPlaylistById", data);
  return response;
};

//Action to adds a new video to the playlist of the user in the db
export const actionAddVideoToPlaylist = async (data) => {
  const response = await mainApiService("actionAddVideoToPlaylist", data);
  return response;
};

//Action To Delete Video From Playlist
export const actionToDeleteVideoFromPlaylist = async (data) => {
  const response = await mainApiService("actionToDeleteVideoFromPlaylist", data);
  return response;
};

//WATCHLATER..
//ACTION TO get Watchlater Videos
export const getWatchlaterVideos = async (data) => {
  const response = await mainApiService("getWatchlaterVideos", data);
  return response;
}

//actionAddVideoToWatchlater
export const actionAddVideoToWatchlater = async (data) => {
  const response = await mainApiService("actionAddVideoToWatchlater", data);
  return response;
}

//actionToDeleteVideoFromWatchlater
export const actionToDeleteVideoFromWatchlater = async (data) => {
  const response = await mainApiService("actionToDeleteVideoFromWatchlater", data);
  return response;
}

//HISTORY
//actionTogethistory
export const getHistory = async (data) => {
  const response = await mainApiService("getHistory", data);
  return response;
}

//Action that adds a video to the history of the user in the db.
export const actionAddVideoToHistory = async (data) => {
  const response = await mainApiService("actionAddVideoToHistory", data);
  return response;
}

//actionToDeleteVideoFromHistory
export const actionToDeleteVideoFromHistory = async (data) => {
  const response = await mainApiService("actionToDeleteVideoFromHistory", data);
  return response;
}

//action To Clear All History
//actionToClearAllHistory
export const actionToClearAllHistory = async (data) => {
  const response = await mainApiService("actionToClearAllHistory", data);
  return response;
}
