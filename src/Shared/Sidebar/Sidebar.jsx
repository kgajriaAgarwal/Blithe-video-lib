import React from 'react';
import blitheLogo from '../../Assets/Images/vl7.PNG'
import {Image} from '../index';
import menuIcon from '../../Assets/Icons/menu.png';
import { BiMenu , BiHomeAlt , BiLike} from "react-icons/bi";
import { MdExplore, MdOutlineSubscriptions, MdHistory, MdOutlineWatchLater, MdPlaylistPlay, MdLogout, MdOutlineLogin, MdOutlineLabelImportant } from "react-icons/md";
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import { clearLocalStorage} from '../../Helpers/Helpers/Utils';
import { v4 as uuid } from "uuid";
import { useAlert } from '../../Context';

export const Sidebar = () => {

    const navigate = useNavigate();
    const {alertContent , setAlertContent} = useAlert();

    return(
        <>
            {/* <h1>side bar</h1> */}
            <div className="sidebar">
                <div className="logo_content">
                    <div className="logo">
                        <Image src={blitheLogo} alt="blithe-logo" className="logo_name"/>                
                    </div>
                </div>
                <ul className="nav_list">
                    <li>
                        <Link to="/">
                            <BiHomeAlt color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Home</span>
                        </Link>
                        <Link to="/videos/:categoryId">
                            <MdExplore color='white' size='1.5rem' className='nav-icon' />
                            <span className="links_name">Explore </span>
                        </Link>
                        {/* <a href="#">
                            <MdOutlineSubscriptions color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Subscriptions </span>
                        </a> */}
                        <Link to="/user/history" >
                            <MdHistory color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">History</span>
                        </Link>
                        <Link to="/user/watchlater">
                            <MdOutlineWatchLater color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Watch later</span>
                        </Link>
                        <Link to="/user/liked-videos" >
                            <BiLike color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Liked videos</span>
                        </Link>
                        <Link to="/user/playlists" >
                            <MdPlaylistPlay color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Playlists</span>
                        </Link>
                        <Link to="/login" >
                            <MdOutlineLogin color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Login</span>
                        </Link>
                        <Link to="/signup" >
                            <MdOutlineLabelImportant color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">SignUp</span>
                        </Link>
                       
                    </li>
                </ul>

                <div className="profile_content">
                    <div className="profile">
                        <Image className="avatar xs"
                                src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                alt="user"/>
                        <p>karishma gajria</p>
                    </div>
                    {/* //clearLocalStorage() */}
                    <button className='btn-logout' onClick={()=>{
                            localStorage.clear()
                            setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"You heve been logged out successfully!"})
                            navigate("/")

                        }}>
                        <MdLogout color='white' size='2rem' id="log-out" />
                    </button>                    
                </div>
            </div>
        </>
    );
}



