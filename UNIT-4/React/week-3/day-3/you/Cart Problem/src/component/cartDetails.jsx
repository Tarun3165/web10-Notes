import { useEffect, useState } from "react"
import axios from "axios"
import "../style/Home.css"

const Cart = () => {
    const [cartdata, setCartData] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);


    useEffect(() => {
        
        axios.get("http://localhost:3002/cart")
        .then((res)=>{
            setCartData(res.data)
        })
    },[])
    

    return (
        <div className="container">
        {  cartdata.map((e) => {

            return (
                
                <div className="productDiv" key={e.id}><img className="image" src={e.image_url} alt="" />
                      <p>{e.product_name}</p>
                      <p>{e.description}</p>
                      <p>₹ {e.price}</p>
                      <p>Quantity: {e.quantity}</p>
                    <p >Total Price :₹ {e.quantity * e.price}</p>
                    <button onClick={()=> {setFinalPrice(finalPrice+e.quantity * e.price)}}>Add to payment </button>
                   
                    </div>
            )
        })}
       
            
         <br />
         <br />
        <h2>finalPrice : {finalPrice}</h2>
            
    </div>
 )}


export default Cart