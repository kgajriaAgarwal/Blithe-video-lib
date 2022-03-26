import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
const HomePage = React.lazy(() => import('../HomePage/HomePage'));

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
            <Route path="*" element={<NoMatch />} />
            <Route exact path='/' element={<HomePage/>}/>            
        </Routes>
   );
}
export default RouteData;