import { useState } from 'react'
import res from '../utils/mockData'
import RestaurantCard from './RestaurantCard'

export default Body = () =>{
    let [data,setData] = useState(res); 
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    setData(data = data.filter(i => i.data.avgRating>4))
                    console.log(data)}}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    data.map((restaurant, index) => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}