import react, {useEffect, useState} from 'react';
import './HomePage.css';
import { topCategories, categories } from '../../Data';
import { getAllCategory } from '../../Helpers/Services/actions';
import { Alert, CategoryCard, Corousel, Modal, Toast } from '../../Shared';
import { useAlert } from '../../Context';
import { v4 as uuid } from "uuid";

const HomePage = () =>{

    const {alertContent , setAlertContent} = useAlert();
    const [data, setData] = useState([]);

    useEffect(()=> {
        getAllCategory()
        .then(res=> {
            console.log("resulttt:", res);
            if(res.status === 200){
                setData(res.data.categories);
            }else{
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }            
        })
        .catch((error) => {
                setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            })
        }
    ,[])

    console.log('data', data);

    return(
        <div className="home-content">


        {/* <!-- top categories --> */}
        <div className="col-12 category-container">
        {
            topCategories.length?
                topCategories.map(category=>
                    <button key={category.id} className="button category-item">
                    <img className="category sm"
                        src={category.img}
                        alt={category.title} />
                    <p className='text-sm'>{category.title}</p>
                </button>
                )
            :null
        }
        </div>

        <Corousel/> 

        {/* <!-- featured Categories --> */}
        <p className="heading-md heading-name">Featured Categories</p>
            <div id="featured-prdcts" className="col-12 flex-container-row featured-categories">

                {data?.length?
                    data?.map((cVal,cIndx) =>
                        <CategoryCard key={cIndx}
                            // id = {cVal.id}
                            img = {cVal.img}
                            title = {cVal.title}
                            description = {cVal.description}                           
                        />
                    )
                :''}
            </div>

            {/* <button onClick={()=> setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:'this is an ultimate error meassge'})}>onClick show alert....</button> */}
        
            
        </div >
    );
}

export default HomePage;