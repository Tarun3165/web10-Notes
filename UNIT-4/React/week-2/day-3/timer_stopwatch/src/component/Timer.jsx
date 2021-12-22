import {useState,useEffect, useRef} from "react"

 const Timer = () => {
     const [timeM, setTimeM] = useState(5);
     const [timeS, setTimeS] = useState(60);
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
            setTimeS((prevVal) => {
                return prevVal - 1;
            });
        }, 1000);
        
        
        }
        
        if (timeS <=0)
        {
            setTimeS(60);
            setTimeM((prev) => {
                return prev - 1;
            })
        }
     if (timeM < 0)
     {
         setTimeM(5)
         setTimeS(60)
        clearInterval(timerRef.current)
        
     }
       

    return (
        <div className="componentDiv">
            <h2 > <span style={{fontSize:"4VW"}} >{timeM}</span>m {timeS}s </h2>
            <div className="buttonDiv">

                <button onClick={() => {
                    setStarted(false)
                    clearInterval(timerRef.current)
                }}
                >Pause</button>

                <button onClick={() => {
                    
                    setStarted(true)
                    startTimer()
                }}>start</button>

                <button onClick={() => {
                    setTimeS(60)
                    setTimeM(5);
                    clearInterval(timerRef.current)
                    setStarted(false)
                }}>reset</button>
                </div>
        </div>
    )
}

export default Timer