import {  useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import axios from "axios"

import {  addTodoError, addTodoLoading, addTodoSuccess, getTodo,  } from "../redux/actions"
import { Link } from "react-router-dom"
export const Todo = () => {

    const [text,setText]=useState("")
    const {data,isLoading,isError} = useSelector((state) =>  state.todos)
    // console.log("data",data);
    
    const dispatch = useDispatch();
   
    useEffect(() => {
        handleGetTodo();
        
    },[])
    
    function handleGetTodo() {
        dispatch(getTodo())
           
        }
        
        function handleAddTodo() {
            dispatch(addTodoLoading())
                    axios.post("http://localhost:3001/todos", {
                        title: text,
                        status:false,
                    })
                    .then((res) => {
                        dispatch(addTodoSuccess(res.data)) 
                        handleGetTodo();
                        
                    })
                    .catch((e)=> {
                        dispatch(addTodoError(e.message))
                   })
            }

    return isLoading ? (
        "Loading ..."
    ) : isError ? (
            "error"
        )
            :
            
      <div>
        <input onChange={(e) => {
            return setText(e.target.value);
                }} type="text" placeholder="Enter Todo" />
                
        <button onClick={handleAddTodo}>
        Add todo
        </button>
        {
            data.map((e) => {
                return <div key={e.id}>
                    <Link to={`/todo/${e.id}`}>{e.title}</Link>
              </div>
            })
        }
               
    </div>
}