
import TextField from '@mui/material/TextField';
import { memo, useCallback, useState } from 'react';
import Styled from "styled-components"
import {v4 as uuid}  from "uuid"
import { Counter } from './Counter';
import { MemoisedTodoItem } from './TodoItem';



const TodoInput = () => {
    
    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
    const [list, setList] = useState([])
    
    const handleTitleChange = ((e) => {
        settitle( e.target.value);
    })

    const handleBodyChange = ((e) => {
        setbody( e.target.value);
    })

    const handleAddTodo = () => {
        const data = {
            id:uuid(),
            title:title,
            body:body,
            verify: false
          }
        setList([...list,data])
    }
    // console.log(list);
    
    const handleToggle = useCallback((id) => {
        let newData= list.map((item) => {
          if (item.id === id)
           { item.verify = !item.verify;}
           
          return item
         }) 
         setList(newData) 
       },[list])

    return (  
        <div style={{ border: "1px solid black", width: "40%", margin: "auto", padding: "3%" }}>
         <Counter/> 
          
          <StyledDiv >
              <TextField onChange={(e)=>handleTitleChange(e)} fullWidth label="Enter Title" variant="outlined" />
              <br />
              <br />
              <TextField onChange={(e)=>handleBodyChange(e)} fullWidth multiline  rows={4} label="Body" variant="outlined"/>
          <br />
          <div style={{width:"20%",padding:"2%"}}>
              <button style={{width:"80%",padding:"2%"}} onClick={handleAddTodo}>ADD</button>
          </div>

            </StyledDiv>
            
            <br />
            <br />
            <br />
          
              {
                 list.map((e) => {
                   return <MemoisedTodoItem key={e.id} {...e} handleToggle={handleToggle} ></MemoisedTodoItem  >
                 })
              }
        </div>
    )
}

export const MemoisedTodoInput = memo(TodoInput);  
// export { TodoInput }


  export const StyledDiv = Styled.div`
    /* height: 10VH; */
    padding: 3%;
    margin: auto;
    border: 1px solid black;
    border-radius: 20px;
    &:hover {
        border:1px solid red;
    }
    
    `