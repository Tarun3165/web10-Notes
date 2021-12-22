import { useParams ,Redirect} from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContexts";
import axios from "axios"

export const UserDetails = (() => {
    const [user, setUser] = useState({});
    const { token } = useContext(AuthContext);
    const {id} = useParams();
  
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
            setUser(res.data.data);
            console.log(res.data.data);
    })
},[id])
    if (!token) {
       return <Redirect to="/login"></Redirect>
   }
    return (
        <div>
            <img src={user.avatar} alt="" />
            <p>{ user.first_name}{ user.last_name}</p>
            <p>{ user.email}</p>

        </div>
    )
})