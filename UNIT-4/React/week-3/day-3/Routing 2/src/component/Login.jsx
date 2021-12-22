import { AuthContext } from "../Contexts/AuthContexts";
import { useState ,useContext} from "react";
import axios from "axios"
import { useHistory, useLocation } from "react-router-dom"

export default function Login() {

    const [formdata, setFormdata] = useState({});
    const history = useHistory();
    const location = useLocation()
    console.log(location);
    console.log(history);

    const handleChange=((e) => {
        
        const { name, value } = e.target;
        setFormdata({...formdata,
            [name]: value,
        })
    })
    const { token,handletokenChange } = useContext(AuthContext);
    
    if(token)
    {
        return <button onClick={() => {
            handletokenChange("")
        } }>logout</button>
    }

    return (
        <div>
            <h3>Login</h3>
            <input onChange={handleChange} name="email" type="text" placeholder="enter Email" />
            <input onChange={handleChange} name="password" type="text" placeholder="enter Password" />
            <button onClick={() => {

                // console.log(formdata);
                axios.post("https://reqres.in/api/login",formdata)  
                .then((res) => {
                    console.log(res.data);
                    handletokenChange(res.data.token)
                    history.push("/")
                })
                .catch(console.error)
                
            }}>Login</button>
        </div>
    )
}