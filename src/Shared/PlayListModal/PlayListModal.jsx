import react, { useEffect, useState } from 'react';
import './PlayListModal.css';
import { Input } from '../Input/Input'; 
import { MdOutlineAdd } from "react-icons/md";
import { InputField } from '../Input/InputField';
import { useAlert, usePlaylist } from '../../Context';


export const PlayListModal = (props) =>{
    
    const [playlist, setplaylistdata] = useState({})
    const { selectedVid, is_module , playlistData,
        setIsModalHidden,
        createPlaylist, addVideoToPlaylist, getAllPlaylist} = usePlaylist();
    const [ selectPlaylist, setSelectPlaylist] = useState("");
    const [isCreatePlaylist, setIsCreatePlaylist] = useState(is_module=== "playlist"? true : false);

    useEffect(()=> getAllPlaylist, [])

    return(
        // <!-- Modal -->
        <div id="my-modal" className="bg-modal display-block">
            <div className="modal-content">
                <div className="title-container">
                    <p className="text-md">PlayList</p>
                    <button className='btn' onClick={()=> setIsModalHidden(true)}>
                        <span className="close">&times;</span>
                    </button>
                </div>
                <hr/>
                
                { is_module ==="playlist"?"": 
                    <>
                        {playlistData && playlistData.length?
                            playlistData.map((cVal,cIndx)=>
                            <div className="playlist-container" key={cIndx}>
                                <Input className="radio-btn" type='radio' id={`radiobtn-${cIndx}`} 
                                         name='playlist' value="playlist" 
                                         onChange={() => {
                                            setSelectPlaylist(cVal._id)
                                            addVideoToPlaylist(cVal._id,selectedVid )
                                         }}
                                         checked={ selectPlaylist === cVal._id}
                                 />
                                 <label className="lbl-price">{cVal.title}</label>
                             </div> 
                            ) 
                        :'No playlist has been created yet !!'}
                        <hr/>

                        {isCreatePlaylist?'':<button className="btn btn-sm btn-primary btn-create-playlist" onClick={()=>setIsCreatePlaylist(!isCreatePlaylist)}>
                            <MdOutlineAdd  size='1.5rem' className=''/>
                            Create new playlist
                        </button>}
                    </>
                 }

                { isCreatePlaylist ?
                    <form>
                        <p className="heading-md heading">Create New Playlist</p>
                        <InputField 
                            type='title'
                            title='title'
                            name='title'
                            placeholder='Enter title'
                            value={playlist?.title? playlist.title : ''}
                            onChange={(e)=>setplaylistdata(prevData => {return  {...prevData, title:e.target.value}})}
                        />
                            <InputField 
                            type={'description'}
                            title='description'
                            name='description'
                            placeholder='Enter description'
                            value={playlist?.description? playlist.description : ''}
                            onChange={(e)=>setplaylistdata(prevData => {return  {...prevData, description:e.target.value}})}
                        />

                    
                        <button className="btn btn-sm btn-primary" type="submit" 
                            onClick={(e)=>{
                                    e.preventDefault()
                                    createPlaylist(playlist)                        
                                }}
                            >CREATE</button>
                        
                    </form> 
                :''}
            </div>
        </div>
    );
}