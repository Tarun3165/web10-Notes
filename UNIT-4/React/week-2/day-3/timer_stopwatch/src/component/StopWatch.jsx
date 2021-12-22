import {useState,useEffect, useRef} from "react"

 const StopWatch = () => {
    const [timeS, setTimeS] = useState(0);
    const [timeMs, setTimeMs] = useState(0);
     const [started, setStarted] = useState(false)
     
    const timerRef = useRef(null); 
 
     
     useEffect(() => {
        // startTimer()
        console.log(timerRef.current);
       
     },[])
     
      
    const startTimer = () => {
      
        if (started) {
            return
        }
        setStarted(true)
        timerRef.current = setInterval(() => {
            setTimeMs((prevVal) => {
                return prevVal + 1;
            });
        }, 10);
        
       
        }
        
        if (timeMs >= 100)
        {
            setTimeMs(0);
            setTimeS((prev) => {
                return prev + 1;
            })
        }
        
       

    return (
        <div className="componentDiv">
            <h2 > <span style={{fontSize:"4VW"}} >{timeS}</span>s {timeMs} </h2>
            <div className="buttonDiv">
               <button onClick={() => {
                   setStarted(false)
                   clearInterval(timerRef.current)
               }}
               >Pause</button>{"  "}
   
               <button onClick={() => {
                  
                   setStarted(true)
                   startTimer()
               }}>start</button>{"  "}
   
               <button onClick={() => {
                   setTimeMs(0)
                   setTimeS(0);
                   clearInterval(timerRef.current)
                   setStarted(false)
               }}>reset</button>
           </div>
        </div>
    )
}

export default StopWatch