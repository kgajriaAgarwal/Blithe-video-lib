import react from 'react';
import { MdOutlineDesignServices } from "react-icons/md";
import './Footer.css';

export const Footer = () => {
    return(
        <div className='footer'>
             <MdOutlineDesignServices color='white' size='1.5rem' className='nav-icon'/>
                            <span className="links_name">madeby</span>
            <p>Karishma gajria </p>
        </div>
    );
}
