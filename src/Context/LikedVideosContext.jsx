import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { useAlert } from "./AlertContext";
import { v4 as uuid } from "uuid";
import { actionAddToLikedVideosList } from "../Helpers/Services/actions";


//CONTEXT CREATED
const LikedVideosContext = createContext();

const LikedVideosProvider = ({ children }) => {

    const encodedToken = localStorage.getItem("authData");
    const [likedVideos , setLikedVideos] = useState([]);
    const {alertContent , setAlertContent} = useAlert();

    const addToLikedVideos = async (video) => {
        try {
          const response = await axios.post(
            "/user/likes",
            { video },
            {
              headers: {
                authorization: encodedToken,
              },
            }
          );
          if (response.status === 201) {
            setLikedVideos(response.data.likes);
            setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"video added to liked video list"})
          }
        } catch (err) {
          setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error please try again later !!"})
        }
    };

    const removeFromLikedVideos = async (id) => {
      try {
        const response = await axios.delete(`/user/likes/${id}`, {
          headers: {
            authorization: encodedToken,
          },
        });
        if (response.status === 200) {
          setLikedVideos(response.data.likes);
          setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Video removed from Liked video list"})
        }
      } catch (err) {
        setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpeted error occoured. Please try again later !!"})
      }
    };


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
