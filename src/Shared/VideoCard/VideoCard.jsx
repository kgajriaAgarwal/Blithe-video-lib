import React, { useState } from 'react';
import { MdOutlineWatchLater} from "react-icons/md";

export const VideoCard = (props) =>{

    const [isHover, setIsHover] = useState(false)
    const {video_data} = props;
 
    return(
        <>
            <div className="card-container card-shadow video-card-container">
                <img src={isHover? video_data.gif:video_data.thumbnail}
                    className="card-img video-card-img" alt="card-img"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() =>setIsHover(false)}   
                />
                <div className="card-content-container">
                    <p className="text-sm card-des">{video_data.title}</p>
                    <p className='text-xs card-des'>{video_data.creator}</p>
                    <div className="flex-content">
                        <button className="btn btn-sm btn-watch-later"
                        > <MdOutlineWatchLater color='black' size='1.25rem' className='nav-icon'/>
                            Watch later</button>
                    </div>

                </div> 
            </div> 
        </>
    );
}