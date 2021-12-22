

import {Link} from "react-router-dom"

function Navbar() {

  const Routes = [
    {to:"/",text:"Home"},
    {to:"/contact",text:"Contact"},
    {to:"/about",text:"About"},
    {to:"/users",text:"Users"},
    {to:"/login",text:"Login"},
  ]
  return (
    <div style={{display:"flex",width:"50VW",margin:"auto",justifyContent:"space-around",alignItems:"center"}} className="App">
      
      {Routes.map((e,i) => {
       return <Link key={i} to={e.to}>{e.text }</Link>
       })}
    
      
    </div>
  );
}

export {Navbar};
