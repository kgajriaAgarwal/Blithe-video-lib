import { useLayout , LayoutProvider } from "./LayoutContext";
import { useAlert , AlertProvider } from './AlertContext';
import { useLikedVideos, LikedVideosProvider } from './LikedVideosContext'
import {  usePlaylist , PlaylistProvider } from './PlaylistContext'
import {   useWatchlist, WatchLaterProvider  } from './WatchlaterContext';
import { useHistory, HistoryProvider } from './HistoryContext';
import { useAuthContext, AuthProvider }  from './AuthContext'

export { 
        //PROVIDERS
        LayoutProvider, 
        AlertProvider, 
        LikedVideosProvider,
        PlaylistProvider,
        WatchLaterProvider,
        HistoryProvider,
        AuthProvider,
        
        // CUSTOM HOOKS
        useLayout , 
        useAlert,
        useLikedVideos ,
        usePlaylist,
        useWatchlist,
        useHistory,
        useAuthContext
    };