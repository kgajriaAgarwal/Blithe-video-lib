import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Dashboard_route = () => {
    
    // return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return  <Outlet />;
}

export default Dashboard_route;