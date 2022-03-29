const encodedToken = localStorage.getItem("authData");

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
  }
}