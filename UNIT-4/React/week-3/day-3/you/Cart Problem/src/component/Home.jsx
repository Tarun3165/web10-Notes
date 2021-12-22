import { useEffect, useState } from "react"
import axios from "axios"
import "../style/Home.css"
import { useHistory } from "react-router-dom";


const Home = () => {
    const [productData, setproductData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        
        axios.get("http://localhost:3002/products")
        .then((res)=>{
            setproductData(res.data)
        })
    },[])
    

    return (
        <div className="container">
            {productData.map((e) => {
             return  <div onClick={()=>history.push(`/productPage?${e.id}`)} className="productDiv" key={e.id}><img className="image" src={e.image_url} alt="" />
                    <p>{e.product_name}</p>
                 <p>₹ {e.price}</p>
              
                </div>
            })}
  </div>
      )
  }
  export default Home

