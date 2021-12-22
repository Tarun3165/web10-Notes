import { useEffect, useState } from "react"
import axios from "axios"
import "../style/Home.css"
import { useHistory } from "react-router-dom";

const ProductDetail = () => {
    const [cartdata, setCartData] = useState([]);
    const [finalPrice, setFinalPrice] = useState(0);

    const [quantity, setQuantity] = useState(1);
    const history = useHistory();
    // console.log(history.location.search);

    useEffect(() => {
        
        axios.get("http://localhost:3002/products")
        .then((res)=>{
            
            let data= res.data.filter((e) => {
                return (`?${e.id}` === history.location.search)
                
            })
            setCartData(data)
        })
    },[])
    
   
  

    return (
        <div className="container">

            {cartdata.map((e) => {
                    
              return   <div className="productDiv" key={e.id}><img className="image" src={e.image_url} alt="" />
                <p>{e.product_name}</p>
                <p>{e.description}</p>
                <p>₹ {e.price}</p>
                   <button disabled={quantity<=1} onClick={() => setQuantity(quantity - 1)}>-</button>{" "}<span>quantity:{quantity}</span> <button onClick={() =>  setQuantity(quantity + 1)}>+</button>{" "} 
              
                  <button onClick={() => {
                
                     axios.post("http://localhost:3002/cart", {...e,quantity:quantity})
                     .catch(console.error)
                     
                     
                 } }>Add to Cart</button>
              </div> 
        })}
    </div>
 )}


export default ProductDetail