import React, { useState, useEffect } from 'react';
import './Video.css';
import { Image, PlayListModal } from '../../Shared'; 
import { FcLike, FcDislike } from "react-icons/fc";
import { MdPlaylistAdd } from "react-icons/md";
import { RiPlayListAddFill } from "react-icons/ri";
import { useParams } from 'react-router-dom';
import { getVideoById } from '../../Helpers/Services/actions';
import { useAlert, useHistory } from '../../Context';
import { v4 as uuid } from "uuid";

const Video = () => {

    const { videoId } = useParams();
    const [ videoData, setVideoData] = useState({});
    const {alertContent , setAlertContent} = useAlert();
    const { addVideoToHistory} = useHistory();

    // useEffect(()=> addVideoToHistory(video_data),[])

    useEffect(()=> {
        
        getVideoById({videoId: videoId})
        .then(res=> {
            if(res.status === 200){
                setVideoData(res?.data?.video);
                addVideoToHistory(res?.data?.video)
            }else{
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }            
        })
        .catch((error) => {
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            })
        }
    ,[videoId])

    return(
        <>
            <div className="col-12 video-main-container">
                <div className="col-10 video-sub-container">
                    
                    {/* <!-- LEFT CONTAINER - video--> */}
                    <div className="col-9 left-container">
                       
                        
                        <iframe
                            className="video-frame"
                            frameBorder="0"
                            allow="autoplay"
                            title={'hello'}
                            src={`https://www.youtube.com/embed/${videoData.video}?autoplay=1`}/>

                        <div className="video-details">
                            <p className='heading-md'>{videoData.title}</p>
                            <div className='video-details-container'>
                                <p className='text-sm'>{videoData.creator} | <small>{videoData.subcategory}</small></p>
                                <div className='video-actions'>
                                    <button className='btn btn-action'>
                                        <FcLike size='1.5rem' className=''/>
                                    </button> 
                                    <button className='btn btn-action'>
                                        <RiPlayListAddFill size='1.5rem' className=''/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Image src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1643642689_Cart_Bannersip.jpg" alt="banner"/>

                    </div>

                    {/* <!-- RIGHT CONATINER - SUBTOTAL --> */}
                    <div className="right-container">
                        <div className="col-12 video-right-container">
                           {/* will show category videos here */}
                           {/* functionality yet to be implemented  */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Video;