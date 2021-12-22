
import { useState } from 'react';
import './App.css';
import './component/module.css';
import StopWatch from "./component/StopWatch"
import Timer from "./component/Timer"

function App() {
  
  const [button1,ChooseButton]=useState(true)
  return (
    <div className="App">
      <div className="container">
        <div className="BOX">
          <button onClick={() => {
            ChooseButton(true)
          }}>Timer</button>
          <button onClick={() => {
            ChooseButton(false)
          }}>StopWatch</button>
          </div>
        {
          button1 ? <Timer/> : <StopWatch/>
        }
        

     
      </div>
      
    </div>
  );
}

export default App;
