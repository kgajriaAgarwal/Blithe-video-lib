import React, { useEffect, useState } from 'react';
import img1 from '../../Assets/Images/vl1.PNG'
import img2 from '../../Assets/Images/vl2.PNG'
import img3 from '../../Assets/Images/vl3.PNG'
import './Corousel.css';

export const Corousel = () =>{

    const mySlides = [img1, img2, img3];
    const [slideIndex, setSlideIndex] = useState(0);

     const handleChange = (order) => {
        if(order === "increment"){
            setSlideIndex(prev => (prev+1) % mySlides.length)
        }else{
            setSlideIndex(prev => prev>0?(prev-1) % mySlides.length:(prev+1))    
        }
    }

    return(
        <>
        {/* <!-- corousel --> */}
        <div id="corousel-slider" className="corousel-slider">
            <div className="slider-img">                    
                <div className="my-slides">
                    <img src={mySlides[slideIndex]} alt="blithe1" />
                </div>
            </div>
            <button className="btn btn-sm btn-icon prev-btn" onClick={()=>handleChange('increment')}>&#10094;</button>
            <button className="btn btn-sm btn-icon next-btn" onClick={()=>handleChange('deccrement')}>&#10095;</button>
		</div>
        </>
    );
}

