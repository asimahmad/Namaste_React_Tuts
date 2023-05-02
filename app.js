const parent = React.createElement('div',{id:'parent'},
 React.createElement('div',{id:'child'}, 
 React.createElement('h1',{}, 'I am an H1 tag')));



// const heading = React.createElement('h1', {id:'heading'}, "Hello World from react");
// console.log(heading)
 const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading) 
root.render(parent);
console.log(parent);