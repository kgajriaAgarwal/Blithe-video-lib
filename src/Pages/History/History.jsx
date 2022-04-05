import React, {useState,useEffect} from 'react';
import { VideoCard } from '../../Shared';
import './History.css'; 
import { getHistory } from '../../Helpers/Services/actions';
import { v4 as uuid } from "uuid";
import { useAlert, useHistory  } from '../../Context';


const History = () =>{

    const [ videoData, setVideoData] = useState([]);
    const {alertContent , setAlertContent} = useAlert();
    const {historyVideos,clearHistory} = useHistory();


    const getAPI = (func, str) => {
        func
          .then((response) => {
            if (response.data && response.status === 200) {
                if (str === "getHistory") {
                    setVideoData(response?.data?.history);
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
        getAPI(getHistory(), "getHistory");
      }, [historyVideos]);

    return(
        <>
            <div className="history-container">
                <p className='heading-md'>History</p>
                <button className="btn btn-sm btn-primary" onClick={()=> clearHistory()}>Clear History</button>
            </div>
            <div className="col-12 flex-container-row history-videos">
    
                {videoData?.length?
                    videoData?.map((cVal,cIndx) =>
                        <VideoCard key={cIndx} video_data={cVal} module="historypage"/>                      
                    )
                :<p className='text-lg empty'>No video in the History</p>}
            </div>
        </>
    );
}

export default History;