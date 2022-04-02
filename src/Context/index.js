import { useLayout , LayoutProvider } from "./LayoutContext";
import { useAlert , AlertProvider } from './AlertContext';
import { useLikedVideos, LikedVideosProvider } from './LikedVideosContext'
import {  usePlaylist , PlaylistProvider } from './PlaylistContext'
import {   useWatchlist, WatchLaterProvider  } from './WatchlaterContext';
import { useHistory, HistoryProvider } from './HistoryContext';

export { 
        //PROVIDERS
        LayoutProvider, 
        AlertProvider, 
        LikedVideosProvider,
        PlaylistProvider,
        WatchLaterProvider,
        HistoryProvider,
        
        // CUSTOM HOOKS
        useLayout , 
        useAlert,
        useLikedVideos ,
        usePlaylist,
        useWatchlist,
        useHistory
    };