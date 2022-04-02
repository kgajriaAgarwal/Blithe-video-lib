import React, { useEffect, useState} from 'react';
import { VideoCard } from '../../Shared';
import './WatchLater.css'; 
import { getWatchlaterVideos } from '../../Helpers/Services/actions';
import { v4 as uuid } from "uuid";
import { useAlert, useWatchlist } from '../../Context';

const WatchLater = () => {

    const [ videoData, setVideoData] = useState([]);
    const {alertContent , setAlertContent} = useAlert();
    const {watchLaterVideos} = useWatchlist();
 

    const getAPI = (func, str) => {
        func
          .then((response) => {
            if (response.data && response.status === 200) {
                if (str === "getWatchlaterVideos") {
                setVideoData(response?.data?.watchlater);
              }
            } else{
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }
          })
          .catch((error) => {
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
          });
      };

    useEffect(() => {
        getAPI(getWatchlaterVideos(), "getWatchlaterVideos");
      }, [watchLaterVideos]);


    return(
        <>
            <p className='heading-md'>Watchlater...</p> 
            <div className="col-12 flex-container-row watchlater-videos">
    
                {videoData?.length?
                    videoData?.map((cVal,cIndx) =>
                        <VideoCard key={cIndx} video_data={cVal} module="watchlaterpage"/>                      
                    )
                :<p className='text-lg empty'>No video in the watchlater list</p>}
            </div>
        </>
    );
}

export default WatchLater;
