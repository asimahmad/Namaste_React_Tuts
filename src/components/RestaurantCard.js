import {CDN_URL} from '../utils/constants'
styleCard = {
    backgroundColor: '#f0f0f0'
}

const RestaurantCard = ({resData}) =>{
    //const {name,thumb,cuisine,rating,delivery_time} = resData;
    const {name, costForTwoString,cuisines, deliveryTime,avgRating,cloudinaryImageId} = resData?.data; // optional chaining

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt='res-logo'/>
            <h3>{name}</h3>
            <h6>{cuisines.join(', ')}</h6>
            <h4>{avgRating} stars</h4>
            <h5>{costForTwoString}</h5>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;