import React, { useState } from 'react';
import { MdOutlineWatchLater} from "react-icons/md";
import { FcLike, FcDislike } from "react-icons/fc";
import { useLikedVideos } from '../../Context';



export const VideoCard = (props) =>{

    const [isHover, setIsHover] = useState(false)
    const {video_data, module} = props;
    const { likedVideos,
        setLikedVideos,
        addToLikedVideos, removeFromLikedVideos  } = useLikedVideos();
 
    return(
        <>
            <div className="card-container card-shadow video-card-container">
                <button class="btn card-btn-dismiss" onClick={()=> {module==="LikedVideosPage"?removeFromLikedVideos(video_data._id) :addToLikedVideos(video_data)}}>
                    {module==="LikedVideosPage"?<FcDislike  size='1.5rem' className=''/> :<FcLike size='1.5rem' className=''/>}
                </button>
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