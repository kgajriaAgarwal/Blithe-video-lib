import { useLayout , LayoutProvider } from "./LayoutContext";
import { useAlert , AlertProvider } from './AlertContext';
import { useLikedVideos, LikedVideosProvider } from './LikedVideosContext'
import {  usePlaylist , PlaylistProvider } from './PlaylistContext'

export { 
        //PROVIDERS
        LayoutProvider, 
        AlertProvider, 
        LikedVideosProvider,
        PlaylistProvider,

        // CUSTOM HOOKS
        useLayout , 
        useAlert,
        useLikedVideos ,
        usePlaylist 
    };