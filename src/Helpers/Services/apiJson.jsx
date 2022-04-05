const encodedToken = localStorage.getItem("authData") ? localStorage.getItem("authData") : '';

export const ApiJson = { 

  login: {
    url: '/auth/login',
    method: 'POST',
    data: {
      "email": "",
      "password": "",
    },
    headers: {
      'Content-Type': 'application/json'
    }, 
    showResultMessage: false,
    showErrorMessage: true,
    },

    signup: {
      url: '/auth/signup',
      method: 'POST',
      data: {
        "email":'',
        "firstName":'',
        "lastName":'',
        "password":'',
        "confirmPassword":''
      },
      headers: {
        'Content-Type': 'application/json'
      }, 
      showResultMessage: false,
      showErrorMessage: true,
      },

    getAllCategory: {
        url: '/categories',
        method: 'GET',
        data: {},
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
          
        }, 
        showResultMessage: false,
        showErrorMessage: false,
    },

    //getCategoryById
    getCategoryById:{
      url: '/categories/:categoryId',
      method: 'GET',
      data: {},
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',        
      }, 
      showResultMessage: false,
      showErrorMessage: false,
    },

    getVideos: {
      url: '/videos',
      method: 'GET',
      data: {},
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        
      }, 
      showResultMessage: false,
      showErrorMessage: false,
  },

  getVideoById:{
    url: '/video/:videoId',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',        
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  getLikedVideos: {
    url: '/user/likes',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'authorization': encodedToken
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  actionAddToLikedVideosList:{
    url: '/user/likes',
      method: 'POST',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //Playlist Routes -- api
  getplaylists: {
    url: '/user/playlists',
    method: 'GET',
    data: {},
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("authData")
    }, 
    showResultMessage: false,
    showErrorMessage: false,
  },

  //Action to Create Playlist
  actionCreatePlaylist:{
    url: '/user/playlists',
      method: 'POST',
      data: {
        "playlist":{}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem("authData")
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //action to Delete Playlist
  actionDeletePlaylist:{
    url: '/user/playlists/:playlistId',
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //Action to get Playlist By Id
  getPlaylistById:{
    url: '/user/playlists/:playlistId',
    method: 'GET',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      'authorization': encodedToken
    }, 
    showResultMessage: false,
    showErrorMessage: true,
  },

  //action to AddVideo To Playlist
  actionAddVideoToPlaylist:{
    url: '/user/playlists/:playlistId',
      method: 'POST',
      data: {
        video:{}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //action to deletes a video from the playlist
  actionToDeleteVideoFromPlaylist:{
    url: '/user/playlists/:playlistId/:videoId',
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //WATCHLATER..
    getWatchlaterVideos: {
      url: '/user/watchlater',
      method: 'GET',
      data: {},
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: false,
    },

    //action to AddVideo To Playlist
    actionAddVideoToWatchlater:{
      url: '/user/watchlater',
        method: 'POST',
        data: {
          video:{}
        },
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },

    //action to deletes a video from the playlist
    actionToDeleteVideoFromWatchlater:{
      url: 'user/watchlater/:videoId',
        method: 'DELETE',
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },

    //HISTORY
    //getHistory
    getHistory: {
      url: '/user/history',
      method: 'GET',
      data: {},
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: false,
    },

    //actionAddVideoToHistory
    actionAddVideoToHistory:{
      url: '/user/history',
        method: 'POST',
        data: {
          video:{}
        },
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },

    //action To Delete Video From hISTORY
    actionToClearAllHistory:{
      url: '/user/history/all',
        method: 'DELETE',
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },
    
}