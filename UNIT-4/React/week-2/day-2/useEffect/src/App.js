 
import Todo from "./component/Todo"
// import Counter from './component/Counter';
// import { useEffect } from 'react';
import { useState } from 'react';
import "./style/todo.css";



function App() {

  const [status, setStatus] = useState(false)

  // const [counter,setCounter]=useState(0)
  // const [age, setAge] = useState(20)
  // 
  // console.log("before");

  // useEffect(() => {
  //   console.log("watching for changes in counter");
  // }, [counter])

  // useEffect(() => {
  //   console.log("watching for changes in age");
  // }, [age])
  
  // useEffect(() => {
  //   console.log("empty arr");
  // }, [])
  
  // useEffect(() => {
  //   console.log("without arr");
  // })   // will come after every render

  // console.log("after");

  return (
    
    
    //   {/* <h1>counter:{counter}</h1>
    //   <h1>age:{age}</h1>
    
    //   <button onClick={()=>setCounter(counter+1)}>count</button>
  //   <button onClick={()=>setAge(age+1)}>age</button> */}
  
  <div className="ParentDiv">  
      <div className="BOX">

  {/* {
    status ?   <Counter initialValue={8} finalValue={0} /> : <button onClick={()=>setStatus(true)}>show</button>
  }
        <Counter/> */}
         <Todo />

      </div>
    </div>

      
   
  );
}

export default App;

