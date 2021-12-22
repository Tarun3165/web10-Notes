import { useEffect, useState } from "react";


export default function Counter({initialValue,finalValue}) {
  
  const [count, setCount] = useState(initialValue)
  
    
  useEffect(()=>{
   const id= setInterval(() => {
      setCount((prevVal) => {
        if (prevVal > finalValue)
        return prevVal - 1;
        else
        {
          clearInterval(id)
          return prevVal
        }
        
      });
   }, 1000);
    
    return (()=> {
      console.log("unmount");
      clearInterval(id)
    })
  }, [])
  
  
  console.log(count)
  
  return (
    <div>
      <h1>Count: {count}</h1>
     
      
    </div>
  );
}