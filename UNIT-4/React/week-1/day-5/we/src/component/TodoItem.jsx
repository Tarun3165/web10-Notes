import React from "react"


const TodoItem=({ props }) => {

    
   
  return (
      
      <div className="titleDiv">
          <input value={props.value} onChange={props.handleChange} type="text" placeholder="Write Something" />
          
          <button onClick={props.handleAddTodoList}>+</button>
          {todoList.map((item)=>{
          return <TodoItem key={item.id} {...item} handleDelete={handleDelete} todoList={todoList }/>

          })}
       </div>
  );
}

export default TodoItem

