import {  useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import axios from "axios"

import {  addTodoError, addTodoLoading, addTodoSuccess, getTodo, getTodoError, getTodoLoading, getTodoSuccess } from "../redux/Todos/actions"
import { useHistory } from "react-router"
export const Todo = () => {

    const [text,setText]=useState("")
    const {data,isLoading,isError} = useSelector((state) =>  state.todos.todos)
    const [Token,setToken]=useState("")
    const [id,setId]=useState("")
    const history = useHistory();
    
    const dispatch = useDispatch();
    
    useEffect(() => {

        axios.get("http://localhost:3001/login")
            .then((res) => {
                console.log('res:', res.data[0])
                setToken(res.data[0].token)
                setId(res.data[0].id)
            })
            .catch((err)=> {
                console.log("err",err);
           })
    
                   
}, [])

const handleLogout=(() => {

        axios.delete(`http://localhost:3001/login/${id}`)
            .then((res) => {
           
                setToken("")
                history.push("/")

            })
            .catch((err)=> {
                console.log("err",err);
           })
    
                   
})

   

    useEffect(() => {
        handleGetTodo();
        
    },[])
    
    function handleGetTodo() {
        dispatch(getTodo())
            //     axios.get("http://localhost:3001/todos")
            //     .then((res) => {
            //         dispatch(getTodoSuccess(res.data))
               
            //     })
            //     .catch((e)=> {
            //         dispatch(getTodoError(e.message))
            //    })
            
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
                </button>{" "}
                
          <button onClick={handleLogout}>Logout</button>
          <br />
        {
            data.map((e) => {
              return  <div key={e.id}>{e.title}</div>
            })
        }
               
    </div>
}