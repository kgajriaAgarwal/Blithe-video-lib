import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { useAlert } from "./AlertContext";
import { v4 as uuid } from "uuid";
import { actionAddToLikedVideosList, actionRemoveFromLikedVideosList } from "../Helpers/Services/actions";


//CONTEXT CREATED
const LikedVideosContext = createContext();

const LikedVideosProvider = ({ children }) => {

    const encodedToken = localStorage.getItem("authData");
    const [likedVideos , setLikedVideos] = useState([]);
    const {alertContent , setAlertContent} = useAlert();

    const addToLikedVideos = async (videoObj) => {
      actionAddToLikedVideosList({video:videoObj})
      .then(res=> {
          if(res.status === 201 || res.status === 200){
            setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Video added successfully to Liked videos list!"})
            setLikedVideos(res?.data?.likes);
          }else if(res.status === 409){
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"The video is already in your liked videos list."})
          }else{
            if(encodedToken){
              setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }else{
              setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly login first !!"})
            }
          }            
      })
      .catch((error) => {
          setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly do login first !!"})
      })
    }

     //API - actionToDeleteVideoFromHistory
     const removeFromLikedVideos = ( videoId) =>{
      actionRemoveFromLikedVideosList({ videoId})
    .then(res=> {
        if(res.status === 201 || res.status === 200){
          setLikedVideos(res?.data?.likes);
          setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Video deleted successfully from Liked videos list!"})
        }else{
          if(encodedToken){
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
          }else{
            setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Kindly login first !!"})
          }
        }            
    })
    .catch((error) => {
      setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
    })
  }

      return (
        <LikedVideosContext.Provider  value={{
            likedVideos,
            setLikedVideos,
            addToLikedVideos,
            removeFromLikedVideos
        }}>
          {children}
        </LikedVideosContext.Provider>
      );
}

const useLikedVideos = () => useContext(LikedVideosContext);
  
export { useLikedVideos, LikedVideosProvider };
