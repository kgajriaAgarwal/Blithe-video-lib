import react, {useEffect} from 'react';
import { useLayout, useAlert } from '../../Context';
import './DashboardLayout.css';
import DashboardRoute from './DashboardRoute';
import {Alert , Header, Footer , Sidebar} from '../../Shared';


const DashboardLayout = () =>{

    const {showSidebar , setShowSidebar} = useLayout();
    const {alertContent , setAlertContent} = useAlert();

    //DISMISSES THE ALERT AFTER 3 SEC..
    useEffect(() => {
        const timer = setTimeout(() => {
          setAlertContent(prevState=> {return {...prevState, isShow:false}})
        }, 3000);
        return () => clearTimeout(timer);
      }, [alertContent]);

    return(
        <>
            <Header showSidebar= {showSidebar} setShowSidebar={setShowSidebar}/>
            {showSidebar?<Sidebar />:''}
            <div className={`dashboard-layout ${showSidebar?"dashboard-layout-shift-left":"dashboard-layout-unshift"}`}>
                <DashboardRoute/>
                <Alert/>
            </div>
            <Footer/>
        </>
    );
}

export default DashboardLayout;