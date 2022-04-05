import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { useAlert } from "./AlertContext";
import { v4 as uuid } from "uuid";
import { actionAddVideoToWatchlater, actionToDeleteVideoFromWatchlater } from "../Helpers/Services/actions";


//CONTEXT CREATED
const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {

    const encodedToken = localStorage.getItem("authData");
    const [watchLaterVideos , setWatchLaterVideos] = useState([]);
    const {alertContent , setAlertContent} = useAlert();

    //API - actionAddVideoToPlaylist
    const addVideoToWatchlater = (videoObj) =>{
      actionAddVideoToWatchlater({video:videoObj})
      .then(res=> {
          if(res.status === 201 || res.status === 200){
            setWatchLaterVideos(res?.data?.watchlater);
            setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Video added successfully  to watchlater!"})
          }else if(res.status === 409){
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"The video is already in your watch later videos."})
          }else{
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
          }            
      })
      .catch((error) => {
          setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
      })
  }

    //API - actionToDeleteVideoFromWatchlist
    const removeVideoFromWatchlater= ( videoId) =>{
      actionToDeleteVideoFromWatchlater({ videoId})
      .then(res=> {
          if(res.status === 201 || res.status === 200){
            setWatchLaterVideos(res?.data?.watchlater);
              setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Video deleted successfully from playlist!"})
          }else{
              setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
          }            
      })
      .catch((error) => {
              setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
      })
    }


      return (
        <WatchLaterContext.Provider  value={{
            watchLaterVideos,
            setWatchLaterVideos,
            addVideoToWatchlater,
            removeVideoFromWatchlater
        }}>
          {children}
        </WatchLaterContext.Provider>
      );
}

const useWatchlist = () => useContext(WatchLaterContext);
  
export { useWatchlist, WatchLaterProvider };
