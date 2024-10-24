import React,{useState} from "react";
function Controlled(){
    const [inputValue,setInputValue]=useState("");
    const handleChange=(e)=>{
        setInputValue(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Submitted value:",inputValue);
    };
    const a=()=>{
        alert("form suceesfully sumbited");
    }
    return(
        <form onsubmit={handleSubmit}>
        <lable>
            Name :
            <input type="text" value={inputValue} onChange={handleChange}/>
        </lable>
        <button type="submit" onClick={a}>Submit</button>
        </form>
    );

   
}

export default Controlled;