import { useState, createContext, useContext } from "react";
import { v4 as uuid } from "uuid";
import { useAlert } from "./AlertContext";
import { getplaylists, 
        actionCreatePlaylist, 
        actionDeletePlaylist , 
        actionAddVideoToPlaylist, 
        getPlaylistById , 
        actionToDeleteVideoFromPlaylist
    } from "../Helpers/Services/actions";

const PlaylistContext = createContext();

const PlaylistProvider = ({children}) => {

    const encodedToken = localStorage.getItem("authData");
    const [playlistData , setPlaylistData] = useState([]);
    const [ playlistVideos, setPlaylistVideos ] = useState([]);
    const {alertContent , setAlertContent} = useAlert();
    const [ isModalHidden, setIsModalHidden] = useState(true);
    const [is_module , setis_module] = useState("");
    const [ selectedVid, setSelectedVid] = useState({});

    const getAllPlaylist = () => {
        getplaylists()
        .then(res=> {
            if(res.status === 200){
                setPlaylistData(res.data.playlists);
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
    

    const createPlaylist = (playlist) =>{
        actionCreatePlaylist({playlist:playlist})
        .then(res=> {
            if(res.status === 201){
                setPlaylistData(res.data.playlists);
                setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Playlist created successfully!"})
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
        .finally(()=>
            setIsModalHidden(true)
        )
    }

    const deletePlaylist = (playlistId) =>{
        actionDeletePlaylist({playlistId:playlistId})
        .then(res=> {
            if(res.status === 200){
                setPlaylistData(res.data.playlists);
                setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Playlist deleted successfully!"})
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
        .finally(()=>
            setIsModalHidden(true)
        )
    }

    //getPlaylistById
    const actionGetPlaylistById = (playlistId) =>{
        getPlaylistById({playlistId:playlistId})
        .then(res=> {
            if(res.status === 200){
                setPlaylistVideos(res.data.playlist.videos);
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
        .finally(()=>
            setIsModalHidden(true)
        )
    }

    //actionAddVideoToPlaylist
    const addVideoToPlaylist = (playlistId, videoObj) =>{
        actionAddVideoToPlaylist({playlistId:playlistId, video:videoObj})
        .then(res=> {
            if(res.status === 201){
                setPlaylistVideos(res.data.playlist.videos);
                setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Video added successfully  to playlist!"})
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
        .finally(()=>
            setIsModalHidden(true)
        )
    }

    //actionToDeleteVideoFromPlaylist
    const removeVideoFromPlaylist = (playlistId, videoId) =>{
        actionToDeleteVideoFromPlaylist({playlistId, videoId})
        .then(res=> {
            if(res.status === 200){
                setPlaylistVideos(res.data.playlist.videos);
                setAlertContent({_id: uuid(), isShow:true, type:'SUCCESS', content:"Video deleted successfully from playlist!"})
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
        .finally(()=>
            setIsModalHidden(true)
        )
    }

    return(
        <PlaylistContext.Provider value={{
            selectedVid, setSelectedVid,
            is_module , setis_module,
            isModalHidden, 
            playlistVideos,
            setIsModalHidden,
            playlistData,
            getAllPlaylist,
            setPlaylistData,
            createPlaylist,
            deletePlaylist,
            actionGetPlaylistById,
            addVideoToPlaylist,
            removeVideoFromPlaylist
            
        }}>
            {children}        
        </PlaylistContext.Provider>    
    )
}

const usePlaylist = () =>useContext(PlaylistContext);

export { usePlaylist , PlaylistProvider };