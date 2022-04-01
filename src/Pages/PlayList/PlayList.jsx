import React, {useEffect, useState} from 'react';
import './PlayList.css';
import { Image, PlayListModal, VideoCard } from "../../Shared"; 
import { useParams } from 'react-router-dom';
import { useAlert, usePlaylist } from '../../Context';
import { getVideos , getplaylists, getPlaylistById} from '../../Helpers/Services/actions';
import { v4 as uuid } from "uuid";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdPlaylistAdd , MdOutlinePlaylistPlay, MdDeleteForever} from "react-icons/md";

const PlayList = () => {

    const { setis_module, playlistVideos,
        setIsModalHidden,playlistData, getAllPlaylist, deletePlaylist, actionGetPlaylistById} = usePlaylist();
    const [selected_playlist, setSelected_playlist] = useState('')

    useEffect(()=> getAllPlaylist(), [])

    return(
        <>
            <div className="col-12 video-main-container">
                <div className="col-10 video-sub-container">
                    <p className='heading-md align-left'>{playlistVideos && playlistVideos.length && selected_playlist?`Your playlist has ${playlistVideos.length} videos`:"Your Playlist"}</p>
                    {/* <!-- LEFT CONTAINER - videos in the playlist... --> */}
                    <div className="col-9 left-container">                        

                        <Image src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1643642689_Cart_Bannersip.jpg" alt="banner"/>
                        <div className="col-12 flex-container-row playlist-videos">           
                            
                            { playlistVideos && playlistVideos.length && selected_playlist?
                                playlistVideos.map((cVal,cIndx)=>
                                <VideoCard key={cIndx} video_data={cVal} module="playlist" selected_playlist={selected_playlist}/>
                                )
                            :selected_playlist?'No videos added to the playlist yet':'Please select a playlist'}        
                        </div>
                        

                    </div>

                    {/* <!-- RIGHT CONATINER - SUBTOTAL --> */}
                    <div className="right-container">
                        <div className="col-12 video-right-container">
                            <button className="btn btn-sm btn-primary col_12 btn-playlist" 
                                onClick={()=> {
                                    setIsModalHidden(false)
                                    setis_module("playlist")
                                }}
                            >
                                    <MdPlaylistAdd size='1.5rem' className=''/>
                                    <span className="icon-btn-span">create new playlist</span>
                            </button>
                        </div>

                       
                        <p className='heading-md'>Your playlists</p>
                        <hr/>

                        {playlistData && playlistData.length?
                            playlistData.map((playlist, playlist_Indx)=>
                                <div className=' div-playlist'>
                                    <div key={playlist_Indx} className={`col_12 div-playlist ${selected_playlist===playlist._id?"selected-playlist":''}`} 
                                        onClick={()=>{
                                            setSelected_playlist(playlist._id)
                                            actionGetPlaylistById(playlist._id)}
                                        }>
                                        <MdOutlinePlaylistPlay size='1.5rem' className=''/>
                                        <span className="icon-btn-span">{playlist.title}</span>
                                    </div>
                                    <button className='btn' onClick={()=> deletePlaylist(playlist._id) }>
                                            <MdDeleteForever size='1.5rem' className='' color='red'/>
                                    </button> 
                                </div>
                            )
                        :<p className='heading-md'>No playlist created yet!</p>}
                        
                    </div>
                </div>
            </div>
        </>
    );
} 

export default PlayList;