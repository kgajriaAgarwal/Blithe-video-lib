import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import MockAPI from '../Helpers/Helpers/MockMan';
import Dashboard from '../Pages/Dashboard/index';
import PrivateRoute from './PrivateRoute';
import VideoListingPage from '../Pages/VideoListingPage/VideoListingPage';
import Dashboard_route from './Dashboard_route';

const HomePage = React.lazy(() => import('../Pages/HomePage/HomePage'));
const LoginPage = React.lazy(() => import('../Pages/Authentication/Login/Login'));
const SignUpPage = React.lazy(() => import('../Pages/Authentication/SignUp/SignUp'));

const NoMatch = () => {
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
            <Route exact path='/signup' element={<SignUpPage/>}/> 
            <Route exact path='/login' element={<LoginPage/>}/> 
            <Route exact path='/mockman' element={<MockAPI/>}/>
            <Route path='/*' element={<Dashboard/>}/>
        </Routes>
   );
}
export default RouteData;