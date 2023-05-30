import React from 'react'
import {Outlet } from 'react-router-dom'
import ProfileClass from './ProfileClass'
import UserContext from '../utils/userContext';

// const About = () =>{
//     return(
//         <div>
//             <h1>About us</h1>
//             <p>This is namaste react course</p>
//             <Outlet />
//             <ProfileClass name={'Akshay'}/>
//         </div>
//     )
// }

 class About extends React.Component{

    constructor(props){
        super(props);
        //console.log('Parent constructor')
    }
    componentDidMount(){

        // this is called many time and can hanged up the app.
        this.timer = setInterval(()=>{
            //console.log('component did mount is called after 1s of interval') 
         },1000)
        //console.log('Parent component did mount.')
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        //console.log('Parent component will unmount');
    }
    render(){
        //console.log('Parent render')
        return (
                    <div>
                  <h1>About us</h1>
                  <UserContext.Consumer>
                      {(value)=>(
                      <h4 className='font-bold text-xl p-10'> {value.user.name}- {value.user.email}</h4>
                      )}
                  </UserContext.Consumer>
                  <p>This is namaste react course</p>
                  <Outlet />
                  <ProfileClass name={'Asim'}/>
                  <ProfileClass name={'Akshay'}/>
                  </div>
                )
    }
}
export default About


/**
 * logs 
 * Parent constructor
 * Parent render
 * child 1 constructor
 * child 1 render
 * child 2 contructor
 * child 2 redner 
 * after this dom is updated for children
 * child 1 component did mount
 * child 2 component did mount
 * Parent component did mount
 */