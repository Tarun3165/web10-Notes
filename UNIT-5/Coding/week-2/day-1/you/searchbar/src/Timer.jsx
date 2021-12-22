
import {  useEffect, useState } from 'react';
import './App.css';

function useTimer(ms) {

  const [show, setShow] = useState(false);
   
    useEffect(() => {
        
        const id=setTimeout(() => {
            setShow(true)
        }, ms)
      
        return () => {
            console.log("mounting");
            return clearInterval(id)
        }
    },[])
  
  return show;
 }

function Timer() {
  const timer =useTimer(3000);
  return (
    <div>
      {timer ? "WELCOME" : "loading..."}
    </div>
  );
}

export default Timer;
