import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Dashboard_route from '../../route/Dashboard_route';
const HomePage = React.lazy(() => import('../HomePage/HomePage'));
const VideoListingPage = React.lazy(() => import('../VideoListingPage/VideoListingPage'));

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
            <Route exact path="/videos/:categoryId"  element={<VideoListingPage/>}/> 
            {/* <Route exact path='/category' element={<VideoListingPage/>}/>  */}
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/' element={<HomePage/>}/>
        </Routes>
   );
}
export default RouteData;