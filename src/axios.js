import React, {useState,useEffect} from "react";
import axios from "axios";

const Get = () =>{
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [errror,setError] = useState(null);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            console.log(response);
            setData(response.data);
            setLoading(false);
        })
        .catch(errror=>{
            setError(errror.message);
            setLoading(false);
        });
    },[]);

    if (loading) return <p>loading......</p>;
    if (errror) return <p>errror..{errror}</p>;

    return(
        <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        </div>
    );
};

export default Get;