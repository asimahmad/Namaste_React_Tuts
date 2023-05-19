import { useEffect, useState } from 'react'
// import res from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom'

export default Body = () =>{
    let [data,setData] = useState([]);
    const [fdata, setFData] = useState([]);
    let [searchText, setSearchText] = useState('')

    useEffect(()=>{
        getResList();
    },[])

    async function getResList(){
        try{
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING');
            const json = await data?.json();
            setData(json?.data?.cards[2]?.data?.data?.cards);
            setFData(json?.data?.cards[2]?.data?.data?.cards)
        } catch(e){console.error(e)};
    }



    useEffect(()=>{
        searchText?setFData(data.filter(i => i?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))): setFData(data);
        console.log('use effect at search')
    },[searchText])

    // early return (not render component)
    //if(!data.length) return null;


    return data?.length===0? <Shimmer />:fdata.length===0?<><h2>No Restraunt matches your filter</h2><button onClick={()=> {setFData(data), setSearchText('')}}>Clear search</button></>:(
        <div className="body">
            <div className='srch-filt'>
                <div className="filter">
                    <button className="filter-btn" 
                    onClick={()=>{
                        setFData(data.filter(i => i.data.avgRating>4))
                        console.log(data)}}>Top Rated Restaurant</button>
                </div>
                <div className='search-btn'>
                    <input type="text" className="search-input" placeholder='Search' value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                        }
                    } />
                </div> 
            </div>
            <div className="res-container">
                {
                    fdata.map((restaurant, index) => (
                        <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id}>
                        <RestaurantCard  resData={restaurant}/>
                        </Link>))
                }
            </div>
        </div>
    )
}