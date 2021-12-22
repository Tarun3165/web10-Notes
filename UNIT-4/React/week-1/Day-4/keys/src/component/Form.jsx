import { useState } from "react";

const initState = {
    username: "",
    age:"",
}

function Form(){
    
    const [formData,setFormData]=useState(initState)
    
    const handleChange = (e) => {
      console.log(e.name); // will print "username" or "age" whatever as u input
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,// ,means 
        })
    }

    return (
        <form action="">
            <input onChange={handleChange} type="text" name ="username" placeholder="Enter your Name"/>
            <input onChange={handleChange} type="number" name="age" placeholder="Enter your Age"/>
        </form>
    )
}


export default Form