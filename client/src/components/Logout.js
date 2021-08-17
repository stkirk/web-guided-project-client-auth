import React, { useEffect } from "react";
import axios from 'axios';

const Logout = (props)=> { 

    useEffect(()=> {
        axios.post('http://localhost:5000/api/logout')
        .then(res=> {
            console.log(props);
            // localStorage.removeItem("token");
        });
    }, []);
    
    return(<div></div>);
}

export default Logout;