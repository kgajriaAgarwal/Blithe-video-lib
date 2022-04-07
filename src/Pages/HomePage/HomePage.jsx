import react, {useEffect, useState} from 'react';
import './HomePage.css';
import { topCategories, categories } from '../../Data';
import { getAllCategory } from '../../Helpers/Services/actions';
import { Alert, CategoryCard, Corousel, Modal, Toast } from '../../Shared';
import { useAlert } from '../../Context';
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';


const HomePage = () =>{

    const {alertContent , setAlertContent} = useAlert();
    const [data, setData] = useState([]);
    const [ top_categories, setTop_categories] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        getAllCategory()
        .then(res=> {
            if(res.status === 200){
                setData(res.data.categories);
                setTop_categories( res.data.categories.filter(category =>
                    category?.categoryStatus? category.categoryStatus === 'top':''
                ))
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
        <div className="home-content">


        {/* <!-- top categories --> */}
        <div className="col-12 category-container">
        {
            top_categories.length?
                top_categories.map(category=>
                    <button key={category.id} className="button category-item" onClick={() => navigate(`/videos/${category._id}`)}>
                        <img className="category sm"
                            src={category?.categoryIcon}
                            alt={category?.title} />
                        <p className='text-sm'>{category?.title}</p>
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
                    <CategoryCard key={cIndx} item={cVal}                          
                    />
                )
            :''}
        </div>
        
            
        </div >
    );
}

export default HomePage;