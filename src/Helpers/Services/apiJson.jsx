export const ApiJson = { 
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
}