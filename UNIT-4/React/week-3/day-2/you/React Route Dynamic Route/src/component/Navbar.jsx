

import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div style={{display:"flex",width:"50VW",margin:"auto",justifyContent:"space-around",alignItems:"center"}} className="App">

      <Link to="/">Home</Link>
      <Link to="/products">All products</Link>
      
      
    </div>
  );
}

export {Navbar};
