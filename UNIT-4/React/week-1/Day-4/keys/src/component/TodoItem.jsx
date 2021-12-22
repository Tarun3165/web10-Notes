import React from "react"


const TodoItem=({ title,id,status,handleDelete,handleToggle }) => {

    const handleDeleteFn = () => {
      handleDelete(id)
    }
   
  
      return (
          <div  > 
              <div  className="tasks" > {title}{status} <span  onClick={handleDeleteFn} className="remove">✖</span></div>
      </div>
   )
}

export default TodoItem

