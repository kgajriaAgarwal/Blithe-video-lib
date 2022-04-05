import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { useAlert } from "./AlertContext";
import { v4 as uuid } from "uuid";
import { actionAddVideoToHistory, actionToDeleteVideoFromHistory, actionToClearAllHistory } from "../Helpers/Services/actions";


//CONTEXT CREATED
const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {

    const encodedToken = localStorage.getItem("authData");
    const [historyVideos , sethistoryVideos] = useState([]);
    const {alertContent , setAlertContent} = useAlert();

    //API - actionAddVideoToPlaylist
    const addVideoToHistory = (videoObj) =>{
        actionAddVideoToHistory({video:videoObj})
      .then(res=> {
          if(res.status === 201 || res.status === 200){
            sethistoryVideos(res?.data?.history);
          }else if(res.status === 409){
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"The video is already in your history."})
          }else{
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
          }            
      })
      .catch((error) => {
          setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
      })
  }

    //API - actionToDeleteVideoFromWatchlist
    const removeVideoFromHistory= ( videoId) =>{
        actionToDeleteVideoFromHistory({ videoId})
      .then(res=> {
          if(res.status === 201 || res.status === 200){
                sethistoryVideos(res?.data?.history);
              setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Video deleted successfully from history!"})
          }else{
              setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
          }            
      })
      .catch((error) => {
              setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
      })
    }

    //actionToClearAllHistory
    const clearHistory= ( videoId) =>{
        actionToClearAllHistory()
      .then(res=> {
          if(res.status === 201 || res.status === 200){
                sethistoryVideos(res?.data?.history);
              setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"History Cleared !!"})
          }else{
              setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
          }            
      })
      .catch((error) => {
              setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
      })
    }


      return (
        <HistoryContext.Provider  value={{
            historyVideos,
            sethistoryVideos,
            addVideoToHistory,
            removeVideoFromHistory,
            clearHistory
        }}>
          {children}
        </HistoryContext.Provider>
      );
}

const useHistory = () => useContext(HistoryContext);
  
export { useHistory, HistoryProvider };
