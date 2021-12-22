import { useState } from "react";
// import TodoList from './TodoList';
import TodoItem from './TodoItem';
import { v4 as uuid } from 'uuid';

const Todo = () => {
    const [text, setText] = useState("")
    // const X=[];
    // const text = X[0]; will be ""
    // const setText=X[1]; 
    const [todoList, setTodoList] = useState([])
    
    const handleChange = (e) => {
        // console.log(e);  // e.target is pointing to input tag so e.target.value will give wahtever u write
        setText(e.target.value);
    }
    
    const handleAddTodoList = (e) => {
        const payload = { status: false, title: text, id: uuid() }
        console.log(uuid());
        setTodoList([...todoList, payload]); 
        setText("")
    }

    const handleDelete = (id) => {
    
        let updatedList = todoList.filter(item => item.id !== id)
        setTodoList(updatedList);
    }

   

    return (
        <div className="titleDiv">
            <input value={text} onChange={handleChange} type="text" placeholder="Write Something" />
            
            <button onClick={handleAddTodoList}>+</button>
            {todoList.map((item)=>{
            return <TodoItem key={item.id} {...item} handleDelete={handleDelete} todoList={todoList }/>

            })}
         </div>
    );
}

export {Todo}
// export default Todo