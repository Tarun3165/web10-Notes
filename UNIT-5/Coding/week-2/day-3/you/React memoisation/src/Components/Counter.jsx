import {   useEffect,    useState } from "react"

const Counter = () => {
   
    const [count, setCount] = useState(0)

    useEffect(()=>{
         setInterval(() => {
             setCount((prev) => {
                 return prev + 1;
           })
        }, 1000);
         
    }, [])
       
        
    return (
        <div>
            <h3>Count:{ count}</h3>
        </div>
    )
}
export {Counter}