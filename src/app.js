import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
// import About from './components/About' 
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
// import InstaMart from './components/InstaMart'; removed because it's loaded with lazy loading or on demand loading

// chunking or code splitting or dynamic bundling or lazy loading are same.
const InstaMart = lazy(()=> import('./components/InstaMart'))
// upon on demand loading  -> upon render react suspend the loading

const About = lazy(()=>import('./components/About')) // chunking/lazy loading/on demand loading/ dynamic bundling/ dynamic import for About component

// never ever try to lazy load the component inside another component

// const parent = React.createElement('div',{id:'parent'},
// [
//     React.createElement('div',{id:'child1'}, 
//     [
//         React.createElement('h1',{}, 'I am an H1 tag from child1'),
//         React.createElement('h2', {}, 'I am an H2 tag from child1')
//     ]),
//     React.createElement('div',{id:'child2'}, 
//     [
//         React.createElement('h1',{}, 'I am an H1 tag from child2'),
//         React.createElement('h2', {}, 'I am an H2 tag from child2')
//     ])
// ]);



// // const heading = React.createElement('h1', {id:'heading'}, "Hello World from react");
// // console.log(heading)
//  const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(heading) 
// root.render(parent);
// console.log(parent);



// React Element (this is core of react)
//const heading = React.createElement('h1',{id:'heading'}, 'Namaste React');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


// to avoid the above clumsy code, jsx was introduced.
// it is html like or xml like.
// jsx is transpiled before going to js engine (by Parcel: but it is not doing it, it's is just a manager, but babel is doing this operation).
// first jsx converted to React.createElement then it is converted into html element.
// const heading =(<>
//     <h1 id="heading" className="heading">Namaste React using jsx.</h1>
//     <h2>Namaste React using multiline jsx</h2>
//     </>)

// // it is also react element, which is an object
// // console.log(heading);
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(heading);



// // react component
// // class based component (old way)
// // functional based component (new way)

// // functional component: always use capital letter for naming

// const Title = function (){
//     return (
//     <h1>
//         Namaste React using jsx in title component.
//     </h1>
//     )
// }
// const number = 100;
// const ele = <span>Hey there</span>
// const title = <h3 id='heading'>{ele} <Title/></h3>
// const HeadingComponent = () => (
//      <React.Fragment> {/* or <></> */}
//      <>
//         <Title /> {/*this is component composition: calling one component in another */}
//         <h2>{number*2}</h2>
//         {title}
//         {Title()}
//         <h1>Namaste React functional component. </h1>
//         </>
//     </React.Fragment>
// )


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<HeadingComponent/>);
// //root.render(<Title/>); // above one will not render as last one will render only.

const AppLayout = () =>{
    // const [user, setUser] = useState({
    //     name: 'Asim',
    //     email: 'asimlpu123@gmail.com'
    // })

    //const a = lazy(()=> import('path')), this is wrong place to do dynamic loading
    return (
        <div className="app">
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about', // here if /about then it will work cause localhost:1234/about is same if about is given as well.
                element: <Suspense fallback={<h1>loading</h1>}><About /></Suspense>,
                children: [{
                    path: 'profile', // dont give / before else router will take it as localhost:123/about
                    element: <Profile />
                }]
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/instamart',
                element: <Suspense fallback={<Shimmer/>}><InstaMart /></Suspense> // suspense is used for lazy laoding and it a promise, fallback is used to display shimmer until the page is available
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);