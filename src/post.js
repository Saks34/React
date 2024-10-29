    import React, {useState,useEffect} from "react";
    import axios from "axios";

    const Post = () =>{
        const [data,setData] = useState(null);
        const [error,setError] = useState(null);

        const handel= ()=>{
            axios.post('https://jsonplaceholder.typicode.com/posts',{
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
                <button onClick={handel}>Send post request</button>
                {error && <p>error</p>}
            {data && (
                <div>
                    <h1>1Data submiteedd</h1>
                    
                    </div>
            )}
            </div>
        );
    };

    export default Post;