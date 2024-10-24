import React,{useRef} from "react";
function UnControlled(){
    const inputRef = useRef(null);
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Submitted value:",inputRef.current.value);
    };
   
    return(
        <form onsubmit={handleSubmit}>
        <lable>
            Name :
            <input type="text" ref={inputRef} onChange={handleChange}/>
        </lable>
        <button type="submit" onClick={a}>Submit</button>
        </form>
    );

   
}

export default UnControlled;