import React, {useState, useEffect} from 'react';
import { getLocalStorage } from '../../Helpers/Helpers/Utils';
import axios from 'axios';
import { VideoCard } from '../../Shared';
import './LikedVideos.css';

const LikedVideosPage = () =>{

    const encodedToken = getLocalStorage("authData");
    const [ likedVideosData, setLikedVideosData] = useState([])

    const getlikedVideos = async () => {
        try {
          const response = await axios.get('/user/likes', { headers: { authorization: encodedToken } });
          if(response.status === 200){
              setLikedVideosData(response?.data?.likes);
          }
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(()=> 
      getlikedVideos()
    ,[likedVideosData])

    return(
        <>
            <p className='heading-md'>Liked videos</p> 
            <div id="featured-prdcts" className="col-12 flex-container-row liked-videos">   
                   
                {/* //filter DATA ACC TO CATEEGORY */}
                { likedVideosData && likedVideosData.length?
                    likedVideosData.map((cVal,cIndx)=>
                    <VideoCard key={cIndx} video_data={cVal} module="LikedVideosPage"/>
                    )
                :<p className='text-lg empty'>No video in the liked videos list</p>}        
            </div>
        </>
    );
}

export default LikedVideosPage;