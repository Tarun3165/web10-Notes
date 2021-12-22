import Data from "./RestaurantDetails"
import Form from './Form'
import { useState } from "react"; 



function Navbar() {
  
  const [loading, setLoading] = useState(true)

  const [newData, setNewData] = useState("")

  
 const detailsfn=(info)=>{
  setNewData(info)
}
// console.log("info",newData);
  

  
  
  return ( loading ? 
    
    <div className="BOX">
      <div className="navbar">

        {/* <button onClick={()=>setLoading(true)}>Find Restaurant Details</button> */}
        
        <button onClick={()=>setLoading(false)}>Add More Restaurent data</button>
      </div>
      
      <Data newData={ newData}/>
      
    </div>
     :
    <div className="BOX">
      <div className="navbar">
     
        <button onClick={()=>setLoading(true)}>Find Restaurant Details</button>
        {/* <button onClick={()=>setLoading(false)}>Add More Restaurent data</button> */}

     
      </div>
      
      <Form details={ detailsfn}/>
    </div>
  );
}

export default Navbar;
