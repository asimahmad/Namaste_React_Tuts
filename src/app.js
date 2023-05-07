import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body'
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
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);