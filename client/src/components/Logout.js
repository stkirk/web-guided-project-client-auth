import React, { useEffect } from "react";
import axios from 'axios';

const Logout = (props)=> { 

    useEffect(()=> {
        axios.post('http://localhost:5000/api/logout')
        .then(res=> {
            localStorage.removeItem("token");
            props.history.push('/login');
        });
    }, []);
    
    return(<div></div>);
}

export default Logout;