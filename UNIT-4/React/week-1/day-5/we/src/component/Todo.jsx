import { useState } from "react";
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import {nanoid } from 'nanoid';

const Todo = () => {
    const [text, setText] = useState("")
 
    const [todoList, setTodoList] = useState([])
    
    const handleChange = (e) => {
        
        setText(e.target.value);
    }
    
    const handleAddTodoList = (e) => {
        const payload = { status: false, title: text, id: nanoid() }
        console.log(nanoid());
        setTodoList([...todoList, payload]); 
        setText("")
    }

    const handleDelete = (id) => {
    
        let updatedList = todoList.filter(item => item.id !== id)
        setTodoList(updatedList);
    }

   

    return (

        {todoList.map((item)=>{
        return <TodoItem key={item.id} {...item} value={text} handleChange={handleChange} handleAddTodoList={handleAddTodoList} handleDelete={handleDelete} todoList={todoList }/>

        })}
        // <TodoItem value={text} handleChange={handleChange} handleAddTodoList={handleAddTodoList} handleDelete={ handleDelete}/>
        // <div className="titleDiv">
        //     <input value={text} onChange={handleChange} type="text" placeholder="Write Something" />
            
        //     <button onClick={handleAddTodoList}>+</button>
        //  </div>
    );
}

export {Todo}