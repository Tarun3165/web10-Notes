import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import axios from "axios";
function Users() {
    const[ Users, setUsers] = useState([]);
    useEffect(() => {
        
        axios.get(`https://reqres.in/api/users`)
            .then((res) => {
            
                const DATA = res.data.data;
                console.log(DATA);
                setUsers(DATA)
        })
    },[])
    
     
   
    return (
        <div>
            <ul>{Users.map((e) => (
                <li key={e.id}><Link to={`/users/${e.id}`}>{e.first_name} {e.last_name} </Link></li>
               
            ))}</ul>
        </div>
    )
}

export {Users}