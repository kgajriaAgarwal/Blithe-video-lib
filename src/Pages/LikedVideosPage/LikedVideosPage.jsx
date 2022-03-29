import React, {useState, useEffect} from 'react';
import { getLocalStorage } from '../../Helpers/Helpers/Utils';
import axios from 'axios';
import { VideoCard } from '../../Shared';

const LikedVideosPage = () =>{

    const auth = getLocalStorage("authData");
    const [ likedVideosData, setLikedVideosData] = useState([])

    const getlikedVideos = async () => {
        try {
          const response = await axios.get('/user/likes', { headers: { authorization: auth } });
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
            <div id="featured-prdcts" className="col-12 flex-container-row featured-categories ">   
                   
                {/* //filter DATA ACC TO CATEEGORY */}
                { likedVideosData && likedVideosData.length?
                    likedVideosData.map((cVal,cIndx)=>
                    <VideoCard key={cIndx} video_data={cVal} module="LikedVideosPage"/>
                    )
                :''}        
            </div>
        </>
    );
}

export default LikedVideosPage;