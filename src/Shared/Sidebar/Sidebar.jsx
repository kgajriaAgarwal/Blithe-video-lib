import React from 'react';
import blitheLogo from '../../Assets/Images/vl7.PNG'
import {Image} from '../index';
import menuIcon from '../../Assets/Icons/menu.png';
import { BiMenu , BiHomeAlt , BiLike} from "react-icons/bi";
import { MdExplore, MdOutlineSubscriptions, MdHistory, MdOutlineWatchLater, MdPlaylistPlay, MdLogout, MdOutlineLogin, MdOutlineLabelImportant } from "react-icons/md";
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { clearLocalStorage} from '../../Helpers/Helpers/Utils';

export const Sidebar = () => {
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
                        <a href="#">
                            <MdOutlineSubscriptions color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Subscriptions </span>
                        </a>
                        <a href="#" >
                            <MdHistory color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">History </span>
                        </a>
                        <a href="#">
                            <MdOutlineWatchLater color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Watch later</span>
                        </a>
                        <Link to="/user/liked-videos" >
                            <BiLike color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Liked videos</span>
                        </Link>
                        <a href="#" >
                            <MdPlaylistPlay color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">Playlists</span>
                        </a>
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
                    <button className='btn-logout' onClick={()=>clearLocalStorage}>
                        <MdLogout color='white' size='2rem' id="log-out" />
                    </button>                    
                </div>
            </div>
        </>
    );
}



