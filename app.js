import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement('div',{id:'parent'},
[
    React.createElement('div',{id:'child1'}, 
    [
        React.createElement('h1',{}, 'I am an H1 tag from child1'),
        React.createElement('h2', {}, 'I am an H2 tag from child1')
    ]),
    React.createElement('div',{id:'child2'}, 
    [
        React.createElement('h1',{}, 'I am an H1 tag from child2'),
        React.createElement('h2', {}, 'I am an H2 tag from child2')
    ])
]);



// const heading = React.createElement('h1', {id:'heading'}, "Hello World from react");
// console.log(heading)
 const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading) 
root.render(parent);
console.log(parent);