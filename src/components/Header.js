import { useState } from 'react'
import {LOGO_URL} from '../utils/constants'
import {Link} from 'react-router-dom'
import useOnline from '../utils/useOnline'

function loggedInUser(){
    // API call to check authentication 
    return true;
}
export default Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

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
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li>Cart</li>
                    <li><Link to='/instamart'>InstaMart</Link></li>
                    <li>{isOnline?'✅':'🔴'}</li>
                </ul>
            </div>
            {
                isLoggedIn?<button onClick={()=> setIsLoggedIn(false)}>Logout</button>:<button onClick={()=> setIsLoggedIn(true)}>Login</button>
            }
        </div>
    )
}