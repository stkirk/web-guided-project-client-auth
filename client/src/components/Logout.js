import React, { useEffect} from "react";
import axios from 'axios';

const Logout = ()=> {
    axios.post('http://localhost:5000/api/logout')
        .then(res=> {
            localStorage.removeItem("token");
        });
    
    return(<div></div>);
}

export default Logout;