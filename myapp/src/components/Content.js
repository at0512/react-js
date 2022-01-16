import Listitem from "./Listitem" 
import { useState} from 'react'

export const Content = () => {  
    //    let counter = 0 
    let [counter, setCounter] =  useState(0)
    //console.log(counter)  
   // console.log(mysteryFunction)

    return (
        <div className='Container'>  
        <h2>{counter}</h2>   
        <button onClick={()=>{  
            console.log(counter)
            counter = counter+1 
            setCounter(previousvalue=>previousvalue+1
            )
        }}
        >clickme</button>
   
        </div>
    )
} 
export default Content; 

// import React from 'react' 

// class classComponent extends React.Component{
//     constructor(){
//         super(); 
//         this.state ={
//             count:0
//         };
//     } 
//     render(){ 
//         return(
//         <div className='Container'>   
//             {/* //     <h2>{counter}</h2>
//         //     //    <button onClick={()=>{
//         //     //        counter = counter+1 
//         //     //    }}> add me</button> */} 
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed dolor dui. Pellentesque imperdiet, lacus vel volutpat tempus, tortor mauris consequat lacus, et congue sem tellus vel tellus. Donec sit amet lobortis lectus. Aliquam hendrerit tortor sit amet pulvinar malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam a mollis quam, vitae efficitur risus.
//                 </div> 
//         )
//     }
// }
// export default classComponent;