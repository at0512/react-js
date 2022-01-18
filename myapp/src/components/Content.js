import React,{useState} from 'react'

const Content = () => { 
    const [items,setItem] = useState([])  
    const [value,setValue] = useState('') 
    const handleSubmit = ()=>{ 
        console.log(setItem(prev =>[...prev,value]))  
        setValue('')
        // console.log(value) 
       
    } 
    const handlInput = (e)=>{
        setValue(e.target.value)
    } 
const handleDelete = (item)=>{
    console.log(item) 
    setItem(prev => prev.filter(i=> i != item))


}
    return (
        <>
            <h2>To do app</h2>  
        
                <input value={value} onChange={handlInput}type="text " /> 
                <button onClick={handleSubmit}type='submit'>add</button>
                
            <ul>
                {items.map(item => <li>{item}<button onClick={()=>{
                    handleDelete(item)
                }}>Delete</button></li>)}
            </ul>
        </>
    )
}

export default Content
