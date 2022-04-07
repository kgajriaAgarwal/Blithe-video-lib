import React, {useState} from 'react';
import './CategoryCard.css';
import { Link } from 'react-router-dom';
// import {removeSpaceFromStr} from '../../Helpers/Utils';

export const CategoryCard = (props) =>{

    //const ctgryStr = removeSpaceFromStr(props.title);
    const [isHover, setIsHover] = useState(false)

    return(
        <div className="card-container card-shadow category-card">
            {/* <img src={props.item.img} className="card-img" alt="card-img"/> */}

            <img src={isHover? props?.item?.gif : props?.item?.img}
                    className="card-img " alt="card-img"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() =>setIsHover(false)}   
                />

            <div className="card-content-container">
                <p className="text-sm card-des">{props.item.title}</p>
                <p className='text-xs card-des'>{props.item.description}</p>
                <div className="flex-content-category">
                    {/* <a href="../Product_Listing/Product_Listing.html">
                        <button className="btn card-btn card-btn-text explore-btn"><span className='text-lg'>Explore More..</span></button>
                    </a> */}
                    {/* /products/:categoryId/:categoryName */}
                     {/* <Link to={`/products/${props.id}/${props.title}`}  */}
                    <Link to={`/videos/${props.item._id}`} 
                     className="btn card-btn card-btn-text explore-btn">Explore More..</Link>
                </div>
            </div>
        </div>
    );
}

