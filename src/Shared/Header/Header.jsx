import React from 'react';
import playlistIcon from '../../Assets/Icons/playlist.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { BiMenu , BiHomeAlt } from "react-icons/bi";
import { useLayout } from '../../Context'

export const Header = (props) =>{

    const {showSidebar , setShowSidebar} = useLayout();

    return(
        <>
        {/* <!-- header --> */}
        <div className ="header-container">
            <header className="header">
                <div className='header-name-container'>
                    <button 
                        onClick = {()=>setShowSidebar(!showSidebar)}
                    >
                        <BiMenu color='#fff' size='2rem' id="btn"/>
                    </button>
                    <p className="header-title">
                        Blithe
                    </p>
                </div>
                
                <div className="header-icon-container">
                    <input type="text" placeholder='Search here..' className='header-search'/>
                    <div className="header-icon-sub-container">
                        <div className="badge-container dropdown">
                            <img className="avatar xs"
                                src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                alt="user"/>
                        </div>
                    </div>
                    <div className="vl"></div>
                    <div className="header-cart-container badge-container">
                        <a href="#">
                           <div className="badge-container">
                            <img className="xs" src={playlistIcon} alt="icon"/>
                            <span className="avatar-badge avatar-badge-online">0</span>
                            </div>
                        </a>
                    </div>
                </div>
            </header>
        </div>
        </>
    );
}

