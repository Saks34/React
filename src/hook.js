import React,{useEffect, useState} from "react";

const Hook=()=>{
    const [count,setCount] = useState(200);

     useEffect(()=>{
        console.log(`you clicked ${count} times`);
    },[count]);
    
    const Increment =()=>{
        setCount(count+1);
    } 
       const Decrement =()=>{
        setCount(count-1);
    }
    return(
        <>

        <div>
        <p style={{ color: 'black', fontSize: '20px' }}>{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        </div>
        </>
    )
}
export default Hook;