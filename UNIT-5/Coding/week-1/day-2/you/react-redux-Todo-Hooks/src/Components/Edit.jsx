import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getTodo } from "../redux/actions";
import { useHistory } from "react-router";

const Edit = (() => {
    
    const dispatch = useDispatch();
    const history=useHistory()
    const params = useParams();
    
    useEffect(() => {
        dispatch(getTodo())
        
    },[])
    
   
    const {data} = useSelector((state) =>  state.todos)
    
    console.log('data:', data)
    
    const [newData, setNewData] = useState({})

    useEffect(() => {
        for (let i = 0; i < data.length;i++)
        {
            if(data[i].id==params.id)
            setNewData(data[i])
           
        }
    }, [data])
    
   const [text,setText]=useState("")

    const handleChange = ((e) => {
        setText(e.target.value)
    })

    const handleSubmit = (() => {
         axios.patch(`http://localhost:3001/todos/${newData.id}`,{title:text})
    
        dispatch(getTodo())
    })
    
    const handleBack = (() => {
        
        history.goBack()
    })

    return (
         <div>
            <input value={text} onChange={handleChange} type="text" placeholder="Edit the title" />
            <button onClick={handleSubmit}>Save Changes</button>
            <br />
            <br />
            <button onClick={handleBack}>Go Back</button>
         </div>
    )
})
export {Edit}