
import  { useState } from 'react';
import './App.css';

// import {Form} from "./component/Form"

// import Button from "./component/Button"
import Card from "./component/CreditCard"

function App() {
  const InitState = {
    "name": "",
    "card": "",
    "EXM": "",
    "EXY": "",
    "CVV": "",
  }


  const [CardData, setcardData] = useState(InitState)

  function handleChange(e) {
    
    const { name, value } = e.target;
         
    setcardData({
      ...CardData,
      [name]: value,
    })
  }
  // console.log(CardData);
  
    return (
      <div className="App"  >
          <input onChange={handleChange} type="text" name="name" placeholder="Enter your Name" />
          <input onChange={handleChange} type="text" name="card" placeholder="Enter your Card Number" />
          <input onChange={handleChange} type="text" name="EXM" placeholder="Enter your Expiry Month" />
          <input onChange={handleChange} type="text" name="EXY" placeholder="Enter your Expiry Year" />
          <input onChange={handleChange} type="text" name="CVV" placeholder="Enter your CVV" />
          {/* <button  onClick={}>Pay Now</button> */}
        
        
      
        <Card >
          <span style={{marginLeft:"25vh",fontSize:"6vh",padding:"3%"}}>Visa</span>
          <p style={{marginTop:"8vh"}}>{CardData.card}</p>
          <div style={{display:"flex",justifyContent:"space-between",width:"70%",margin:"auto"}}>
            <div>{CardData.name }</div>
            <div>{CardData.EXM}{"/"}{CardData.EXY }</div>
            <div>{CardData.CVV }</div>
          </div>
        </Card>

      

        {/* <Button onClick={() => {
          setTheme(theme === "light" ? "dark" : "light")
        }}> */}
          {/* click me */}
        {/* </Button> */}
     
      </div>
    );
  }


export default App;
