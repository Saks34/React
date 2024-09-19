import React,{useState} from "react";

const Hook=()=>{
    const [count,setCount] = useState(200);

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