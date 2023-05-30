import { useState, useContext } from 'react'
import {LOGO_URL} from '../utils/constants'
import {Link} from 'react-router-dom'
import useOnline from '../utils/useOnline'
import UserContext from '../utils/userContext'

function loggedInUser(){
    // API call to check authentication 
    return true;
}
export default Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    const {user} = useContext(UserContext);

    console.log('Render');
    return (
        <div className="flex justify-between bg-pink-300 shadow-xl sm:bg-blue-50 md:bg-yellow-100">
            <div className="logo-container">
                <a href="/">
                    <img className="h-28 p-2" src={LOGO_URL} />
                </a>
            </div>
            <h1>Food Villa</h1>
            <div className="nav-items">
                <ul className='flex py-10'>
                    <li className='px-2'><Link to='/'>Home</Link></li>
                    <li className="px-2"><Link to='/about'>About Us</Link></li>
                    <li className="px-2"><Link to='/contact'>Contact Us</Link></li>
                    <li className="px-2">Cart</li>
                    <li className="px-2"><Link to='/instamart'>InstaMart</Link></li>
                    <li className="px-2">{isOnline?'✅':'🔴'}</li>
                    <li className='px-2 font-bold text-purple-600'>{user.name}</li>
                </ul>
                
            </div>
            {
                isLoggedIn?<button onClick={()=> setIsLoggedIn(false)}>Logout</button>:<button onClick={()=> setIsLoggedIn(true)}>Login</button>
            }
        </div>
    )
}