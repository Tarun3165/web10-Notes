import { useState } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import { useEffect } from "react";
import "./Products.css"



function Products() {
    
    useEffect(() => {
        getProductDetails()
    },[])
    const [Product, setProduct] = useState([]);
    
    async function getProductDetails() {
        const res = await axios.get(`http://localhost:3001/products`)
        const DATA = res.data;
        console.log(DATA);
        setProduct(DATA)
    }
  
     return (
         <div>
             <div><span>Name</span><span>Price</span>more</div>
             <div>{Product.map((e) => (
                
                 <div key={e.id}><span>{e.name}</span> <span>{e.price} Rs</span> <Link to={`/products/${e.id}`}>moreDetails </Link></div>
               
                
            ))}</div> 
        </div>
    )
}

export {Products}