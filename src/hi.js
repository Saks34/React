import React, {useState,useEffect} from "react";
import axios from "axios";

const Get = () =>{
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);

    const handel= ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1',{
            title:'foo',
            body : 'bar',
            userId : 1
    })
        .then(response=>{
            console.log(response);
            setData(response.data);
            
        })
        .catch(error=>{
            setError(error.message);
        });
    };

    
    if (error) return <p>error..{error}</p>;

    return(
        <div>
            <button onClick={{handel}}>Send post request</button>
            {error && <p>error</p>}
        {data && (
            <div>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
                </div>
        )}
        </div>
    );
};

export default Get;