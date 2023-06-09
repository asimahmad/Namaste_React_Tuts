import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { CDN_URL } from '../utils/constants';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

export default function RestaurantMenu() {
    const {resId} = useParams();
    const [rest, setRest] = useState({});
    const [foodItems, setFoodItems] = useState([])

    
    //const {rest,foodItems} = useRestaurant(resId) custom hook

    if(foodItems.length>0){
        foodItems.pop()
        foodItems.pop()
        foodItems.shift()
    }
    useEffect(()=>{
        getRestroInfo();
        console.log(foodItems[0]?.card?.card?.categories[0])
    },[])

    async function getRestroInfo(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`);
        const json = await data.json();
        setFoodItems(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
        setRest(json?.data?.cards[0]?.card?.card?.info)
    }

    const dispatch = useDispatch();

    const addFoodItem = (item)=>{
        dispatch(addItem(item))
    }
  return foodItems.length===0?<div>not rendered at details</div>:(
      <div className='flex'>
    <div className='res-card'>
      <h2>{rest.name}</h2>
      <img className="res-logo" src={CDN_URL + rest.cloudinaryImageId} alt='restaurant image'/>
      <h3>{rest.areaName}</h3>
      <h3>{rest.city}</h3>
      <h3>{rest.avgRating} star</h3>
      {/* <div>
          <button className='p-2 m-5 bg-green-200'onClick={handleAddItem}>Add Item</button>
      </div> */}
    </div>
    <div>
    {
        foodItems.map(item=>(
                <>
                    {item?.card?.card?.categories?.map(category=>(
                            <p>
                            {
                                category?.itemCards.map(e=>(
                                    <p>
                                        {e?.card?.info?.name}
                                        <button className='p-1 m-1 bg-green-100'onClick={()=> addFoodItem(item)}>Add</button>

                                    </p>
                            ))}
                            </p>
                    )
                    )}
                    </> 
        ))
    }
    </div>
    </div>
  )
}
