import { useEffect, useState } from "react";


import TodoItem from './TodoItem';

const Todo = () => {
    const [text, setText] = useState("")
   
    const [todoList, setTodoList] = useState([])
    const [Loading, setLoading] = useState(true)
    
    useEffect(() => {
        getTodosList();
    },[])

    function getTodosList(){
        fetch("http://localhost:3001/todos")
        .then((data) =>  data.json() )
        .then((data) => {
            console.log("todos",data);
            setTodoList(data)
            setLoading(false)
        })
    }
    
      
   

    const handleToggle = (id) => {
        

        fetch(`http://localhost:3001/todos/${id}`)
        .then((data) =>  data.json() )
            .then((data) => {
                
              const newData = {
                status:!data.status
                }
                
            fetch(`http://localhost:3001/todos/${id}`, {
                method: "PATCH",
                body: JSON.stringify(newData),
                headers: {
                    "Content-Type": "application/json",
                    
                },
            }).then(() => {
                getTodosList()
            })
        })

      
        
    }

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                
            },
        }).then(() => {
            getTodosList()
        })
        
    }

      

        return Loading ? "Loading..." :(
            <div >   
                <h1>Simple Todo App</h1>
                <input value={text}  type="text" onChange={(e) => {
                    setText(e.target.value)
              
                }} placeholder="Write Something" />
                
                <button onClick={() => {
                  
                    const data = {
                        title: text,
                        status: false,
                    };
                    fetch("http://localhost:3001/todos", {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }).then(()=>{

                        getTodosList()
                       setText("")

                    })
                }}>+</button>

                {todoList.map((item)=>{
                    return <TodoItem key={ item.id} {...item}  handleToggle={handleToggle} handleDelete={handleDelete}/>
                })}
          </div>
        );
}

export default Todo
