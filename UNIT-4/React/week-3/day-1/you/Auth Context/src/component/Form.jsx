import { AuthContext } from "../Contexts/AuthContexts";
import { useContext,useState } from "react";
import axios from "axios";

function Form() {
  
  const initState = {
     "email": "",
     "password":""
  }
  const [formData, setFormData] = useState(initState)
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(fileRef.current.files[0]);
    
    setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
})

    const {token, handletokenChange} = useContext(AuthContext);
    return token ? (
        <>
       
            <h3>token is : {token} </h3>
          
        </>

    ):
      (
            <>
          {"user is not logged in , login pls"}
          <br />
        
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="password" />
            <input type="submit" placeholder="Submit" />
          
          
          
          
          <button onClick={async () => {
           
            const res = await axios.get(`http://localhost:3001/login`)
            console.log(res.data)
          }}>Login</button>
             </>
        )
}
export default Form