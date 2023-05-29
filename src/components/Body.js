import { useEffect, useState } from 'react'
// import res from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom'
import useOnline from '../utils/useOnline'

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

    const isOnline = useOnline(); // hooks are removed during unmounting phase

    if(!isOnline) return <h1>👹 Offline!! Please check your internet connection</h1>
    
    return data?.length===0? <Shimmer />:fdata.length===0?<><h2>No Restraunt matches your filter</h2><button onClick={()=> {setFData(data), setSearchText('')}}>Clear search</button></>:(
        <div className='body'>
            <div className='srch-filt p-5 bg-pink-50 my-5'>
                <div className='flex justify-start'>
                <div className="filter">
                    <button className="p-2 m-4 bg-pink-300 rounded-sm hover:bg-pink-500 hover:first-letter:font-extrabold" 
                    onClick={()=>{
                        setFData(data.filter(i => i.data.avgRating>4))
                        console.log(data)}}>Top Rated Restaurant</button>
                </div>
                <div className='p-2 m-4 text-red-300'>
                    <input type="text" className="focus:bg-pink-50" placeholder='Search Restaurant' value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                        }
                    } />
                </div> 
                </div>
            </div>
            <div className="flex flex-wrap">
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