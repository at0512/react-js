const container = document.getElementById('app') 
// console.log(container) 
 const content = React.createElement('div', {}, [
 React.createElement('h1',{}, "I'am heading one"),
 React.createElement('p',{},"I'am a paragraph one")
 ])

  
 ReactDOM.render(content, container) 

