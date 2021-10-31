const container = document.getElementById("app") 
 
const content = React.createElement('div', {}, [
   React.createElement('h1', {}, "I'am a heading"),
   React.createElement('h3',{},"I'am a heading 2 ") 
]) 
ReactDOM.render(content, container)