import React,{ Suspense} from 'react';
import RouteData from './RouteData'
// import PrivateRoute from './PrivateRoute';
import Loader from '../../Shared/Loader/Loader';

const DashboardRoute = () =>{

    return(
        <Suspense fallback={<Loader/>}>
            <RouteData/>
        </Suspense>
    );
}

export default DashboardRoute;