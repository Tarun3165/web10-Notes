
import { memo, useMemo, useState } from "react"
import { StyledDiv } from "./TodoInput";

const delay = (time) => {
  const start = Date.now();
  while(Date.now()-start<time)
  {  
      continue;
  }
 
    return
}

function random(number){
  return Math.floor(Math.random()*number);
}


function TodoItem({ title,body, verify, id, handleToggle }) {
  
  const [color, setColor] = useState("green")
  
  function switchColor() {
    var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    setColor(randomColor)
  } 
     
    useMemo(() => {
      console.log("cal..");
      switchColor()
      return delay(500)
    }, []);
    
 
 
  console.log("cal..");

   
  return (
    <StyledDiv >
      
      <div style={{display:"flex"}}>
        <div style={{ flexBasis: "20%", backgroundColor: `${color}`}}></div>
        <div >
          <h3>{title} - {`${verify}`}</h3>
          <p>{body} </p>
        </div>
      </div>
      <div style={{width:"20%",padding:"2%"}}>
          <button style={{width:"80%",padding:"2%"}} onClick={()=>handleToggle(id)}>Verify</button>
     </div>
        
    </StyledDiv>
  );
}

export const MemoisedTodoItem = memo(TodoItem);      //same react.memo
// export default TodoItem

