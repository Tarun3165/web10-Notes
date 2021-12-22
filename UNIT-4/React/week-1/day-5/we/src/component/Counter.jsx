import { useState } from "react";


export default function Counter({ initialValue }) {
  
    const [count, setCount] = useState(initialValue);  
         //state,  setState
  const handleClick=(change) => {
    setCount(count + change);
  };
  
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={()=>handleClick(1) }>Add 1</button>
      <button onClick={()=>handleClick(-1) }>Reduce 1</button>
      <button onClick={() => handleClick(count)}>Double</button>
      
    </div>
  );
}