import React, { useState } from 'react';
import { MdOutlineWatchLater, MdPlaylistAdd} from "react-icons/md";
import { FcLike, FcDislike } from "react-icons/fc";
import { useLikedVideos, usePlaylist } from '../../Context';
import { Link } from 'react-router-dom';
import { PlayListModal } from '../PlayListModal/PlayListModal';
import { CgPlayListRemove } from "react-icons/cg";



export const VideoCard = (props) =>{

    const [isHover, setIsHover] = useState(false)
    const {video_data, module , selected_playlist} = props;
    const { likedVideos,
        setLikedVideos,
        addToLikedVideos, removeFromLikedVideos, addVideoToPlaylist  } = useLikedVideos();
        const { is_module , setis_module, selectedVid, setSelectedVid,isModalHidden, 
            setIsModalHidden, removeVideoFromPlaylist} = usePlaylist();
 
    return(
        <>
            
            <div className="card-container card-shadow video-card-container">
                <button className="btn card-btn-dismiss" onClick={()=> {module==="LikedVideosPage"?removeFromLikedVideos(video_data._id) :addToLikedVideos(video_data)}}>
                    {module==="LikedVideosPage"?<FcDislike  size='1.5rem' className=''/> :<FcLike size='1.5rem' className=''/>}
                </button>
                <Link to={`/video/${video_data._id}`}>
                    <img src={video_data.thumbnail}
                        className="card-img video-card-img" alt="card-img"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() =>setIsHover(false)}   
                    />
                </Link>
                <div className="card-content-container">
                    <p className="text-sm card-des">{video_data.title}</p>
                    <p className='text-xs card-des'>{video_data.creator}</p>
                    <div className="flex-content action-container">
                        <button className="btn btn-sm btn-watch-later"> 
                            <MdOutlineWatchLater color='black' size='1.25rem' className='nav-icon'/>
                            Watch later
                        </button>
                        <button className="btn btn-sm" onClick={()=> {
                            module ==="playlist"?
                                removeVideoFromPlaylist(selected_playlist,video_data._id)
                            :
                                setIsModalHidden(false)
                                setis_module("videoCard")
                                setSelectedVid(video_data)
                            }}> 
                            {module ==="playlist" ? <CgPlayListRemove color='red' size='1.25rem' className='nav-icon'/>
                            :<MdPlaylistAdd color='green' size='1.25rem' className='nav-icon'/>}
                        </button>
                        

                    </div>

                </div> 
            </div> 
        </>
    );
}