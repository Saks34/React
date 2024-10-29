import React, { useState } from "react";
import axios from "axios";

const DeletePost = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleDelete = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1') 
            .then(response => {
                console.log(response);
                setData("data deleted");
                setSuccess(true);
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Post</button>

            {success && <p>{data}</p>}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default DeletePost;
