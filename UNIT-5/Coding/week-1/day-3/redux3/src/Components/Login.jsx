import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginError, loginLoading, loginSuccess } from "../redux/Auth/actions";

const Login = (() => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("")
    const [password,setPassword]=useState("")
    const { token,loading,error} = useSelector((state) =>  state.auth)
  
    const history = useHistory();

  

    function handleLogin() {
        dispatch(loginLoading())
                axios.post("https://reqres.in/api/login", {
                    email: email,
                    password:password,
                })
                .then((res) => {
                    dispatch(loginSuccess(res.data.token)) 
                    axios.post("http://localhost:3001/login", res.data)
                      history.push("/todos")
                })
                .catch((e)=> {
                    dispatch(loginError(e.message))
               })
    }
    
    return loading ? (
        "Loading ..."
    ) : error ? (
                "error"
            )
           
    :
   (
        <div>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email"/>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password"/>
            <button onClick={handleLogin}>Login</button>
            
        </div>
    )
})
export { Login}