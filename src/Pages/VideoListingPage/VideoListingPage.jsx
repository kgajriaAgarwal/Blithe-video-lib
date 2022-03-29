import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useAlert } from '../../Context';
import { VideoCard } from '../../Shared';
import './VideoListingPage.css';
import { getCategoryById , getVideos, getAllCategory} from '../../Helpers/Services/actions';
import { v4 as uuid } from "uuid";

const VideoListingPage = () =>{

    const [data, setData] = useState({});
    const [ videoData, setVideoData] = useState([]);
    const [ categoryData, setCategoryData] = useState([]);
    const { categoryId } = useParams();   
    const {alertContent , setAlertContent} = useAlert();
    const [selectedCategory, setSelectedCategory] = useState('')

    useEffect(()=> {
        getCategoryById({categoryId: categoryId})
        .then(res=> {
            if(res.status === 200){
                setData(res.data.category);
            }else{
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }            
        })
        .catch((error) => {
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            })
        }
    ,[categoryId])

    useEffect(()=> {
        getVideos()
        .then(res=> {
            if(res.status === 200){
                setVideoData(res.data.videos);
            }else{
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }            
        })
        .catch((error) => {
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            })
        }
    ,[])

    useEffect(()=> {
        getAllCategory()
        .then(res=> {
            if(res.status === 200){
                setCategoryData(res.data.categories);
                const sel_ctgry = res.data.categories.find(ctgry => ctgry._id === categoryId);
                setSelectedCategory(sel_ctgry.title);
            }else{
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }            
        })
        .catch((error) => {
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            })
        }
    ,[])

    return(
        <>
            {/* //For subcategory.. commented for future perspective */}
            {/* <div className="col-10 chips-container">
                <div className="chip-word-flex">
                {data && Object.keys(data).length?
                    data.subcategory.length?
                        data.subcategory.map((sub_ctgry,cIndx)=> 
                            <p key={cIndx} className="chip-word">{sub_ctgry}</p>
                        )
                    :<p key={cIndx} className="chip-word">All</p>
                :<p className="chip-word">All</p>}
                </div>
            </div> */}

            {categoryData && categoryData.length?
            <div className="col-10 chips-container">
                <div className="chip-word-flex">        
                    {categoryData.map((ctgry,cIndx)=> 
                        <button 
                            key={cIndx} 
                            className={`chip-word ${ctgry.title===selectedCategory?'sel-ctgry':''}`}
                            onClick={()=>setSelectedCategory(ctgry.title)}
                        >{ctgry.title}</button>
                    )}                      
                </div>
            </div>
            :''}
           
            <div id="featured-prdcts" className="col-12 flex-container-row featured-categories ">           
                {/* //filter DATA ACC TO CATEEGORY */}
                { videoData && videoData.length?
                    videoData.filter(el => el.category === selectedCategory).map((cVal,cIndx)=>
                    <VideoCard key={cIndx} video_data={cVal} module="VideosListingPage"/>
                    )
                :''}        
            </div>
        </>
    );
}

export default VideoListingPage;