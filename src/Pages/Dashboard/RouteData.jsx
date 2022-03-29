import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PrivateRoute from '../../route/PrivateRoute';
const HomePage = React.lazy(() => import('../HomePage/HomePage'));
const VideoListingPage = React.lazy(() => import('../VideoListingPage/VideoListingPage'));
const LikedVideosPage = React.lazy(() => import('../LikedVideosPage/LikedVideosPage'));

function NoMatch() {
    return (
      <div>
        <h2>404.. This page is not found!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }


//Routing Data
const RouteData = () =>{
    return(
        <Routes>  
           <Route exact path='/user' element={<PrivateRoute/>}>                
              <Route exact path="/user/liked-videos"  element={<LikedVideosPage/>}/> 
                {/* <Route exact path='/user/wishlist' element={<Wishlist/>}/> */}
            </Route>
            {/* <Route exact path="/liked-videos"  element={<LikedVideosPage/>}/>  */}
            <Route exact path="/videos/:categoryId"  element={<VideoListingPage/>}/> 
            {/* <Route exact path='/category' element={<VideoListingPage/>}/>  */}
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/' element={<HomePage/>}/>
        </Routes>
   );
}
export default RouteData;