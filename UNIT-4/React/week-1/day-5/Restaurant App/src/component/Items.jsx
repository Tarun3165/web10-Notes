import "../style.css";


const Items = ({details}) => {
   
    return (
         <div >
  
        <div  className="card">
    <img src={details.image} alt="" /> 
    <p className="name">{details.name}</p> 
            <p className="type">{details.type}</p>
            <p className="cost">Cost ₹{details.cost} for one</p>
            <div className="popularity"> 
               <span className="c1">★ { details.rating}</span>
                <span className="c2">•</span>
                <span className="c3">{details.votes} VOTES</span>
                <span className="c4">•</span>
               <span className="c5">{ details.reviews} REVIEWS</span>
          </div>
          <div className="payment">
            <span>  {details.payment_methods.card === "false" ? "" : "Accepts card"} </span>
            <span>  { details.payment_methods.cash==="false"? "":"Accepts cash"} </span>
            <span> { details.payment_methods.upi==="false" ? "":"Accepts upi "} </span>
          </div>
            
        </div>
      
    
   </div>
    )
}
 export default Items