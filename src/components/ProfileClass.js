import React from 'react'

class Profile extends React.Component{

    constructor(props){
        super(props);
        // create state
        this.state = {
            count: 1,
            count2: 1,
            userInfo:{
                    name: 'Dummy Name',
                    location: 'Dummy location'
            }
        }
        console.log(this.props.name + ' constructor');
    }

    // for API calls
    async componentDidMount(){
        //console.log(this.props.name+ ' Component did mount is called') // will be logged before parent component did mount
        const data = await fetch(`https://api.github.com/users/${this.props.name}`)
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        })
        console.log(this.props.name+ ' Component did mount is called') // will be logged after parent component did mount.
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.count!= prevState.count){
            // code that depends on count change
        }
        if(this.state.count2!= prevState.count2){
            // code that depends on count2 change
        }
        // to overcome the above issue, we can have 2 useEffect with count and count2 dependecy in each to get the same result.
        console.log(this.props.name+ 'Component did update.')
    }
    componentWillUnmount(){
        // mostly for clean up
        // it is called when when leave the component (eventually we are changing the page though it's a SPA but still)
        console.log(this.props.name+ 'component will unmount')
    }

    render(){
        console.log(this.props.name+ ' render');
        return (
            <div>
            <h1>Profile</h1>
            <img src={this.state.userInfo.avatar_url} />
            <h2>Name: {this.state.userInfo.name}</h2>
            <p>Bio: {this.state.userInfo.bio}</p>
            <h2>Location: {this.state.userInfo.location}</h2>
            <h3>Count1: {this.state.count}</h3>
            <h3>Count2: {this.state.count2}</h3>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    count2: 3
                })
            }}>Increment</button>
            </div>
        )
    }
}

export default Profile;


/**
 * log will be like
 * Parent constructor
 * Parent render
 * Asim constructor
 * Asim render
 * Akshay constructor
 * Akshay render
 * Parent component did mount ( as the children component did mount making an async api calls)
 * Asim json 
 * Asim component did mount
 * Akshay json
 * Akshay component did mount
 * Asim component will unmount (when moving to another page/component)
 * Akshay component will unmount (when moving to another page/component)
 */