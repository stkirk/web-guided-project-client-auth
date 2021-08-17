import React, { useEffect } from "react";
import axios from 'axios';

const Logout = (props)=> { 

    useEffect(()=> {
        const token = localStorage.getItem("token");

        axios.post('http://localhost:5000/api/logout', {
            headers: {
                authorization: token
            }
        })
        .then(res=> {
            localStorage.removeItem("token");
            props.history.push('/login');
        });
    }, []);
    
    return(<div></div>);
}

export default Logout;