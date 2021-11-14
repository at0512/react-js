//  import React, {useState} from 'react'
//  const Content = () => {
 
//     //let counter = 0  
//     const counter = useState(0) 
//     console.log(counter)



//     return (

//         <div className="container"> 
//         {/* <h2>{counter}</h2>
//             <button onClick={()=>{ 
//                 console.log(counter )
//                 counter = counter + 1
//             }}>click me</button> */}
//         </div>
//     );
// }

// export default Content; 

import React  from 'react' 
class Content extends React.Component{
    constructor(){
        super(); 
        this.state ={
            Count: 0
        };
    }  
    render(){

            return (

                        <div className="container"> 
                        {/* <h2>{counter}</h2>
                            <button onClick={()=>{ 
                                console.log(counter )
                                counter = counter + 1
                            }}>click me</button> */} 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper massa blandit lacus venenatis faucibus. Fusce pulvinar auctor metus. Sed vestibulum dui sit amet orci consectetur interdum sit amet nec nibh. Nunc porttitor sapien et quam pellentesque commodo. Vivamus vel vestibulum nibh, id consequat arcu.
                        </div>
                    )
        }
    }
export default Content;