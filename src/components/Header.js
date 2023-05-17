import { useState } from 'react'
import {LOGO_URL} from '../utils/constants'

function loggedInUser(){
    // API call to check authentication 
    return true;
}
export default Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    console.log('Render');
    return (
        <div className="header">
            <div className="logo-container">
                <a href="/">
                    <img className="logo" src={LOGO_URL} />
                </a>
            </div>
            <h1>Food Villa</h1>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn?<button onClick={()=> setIsLoggedIn(false)}>Logout</button>:<button onClick={()=> setIsLoggedIn(true)}>Login</button>
            }
        </div>
    )
}