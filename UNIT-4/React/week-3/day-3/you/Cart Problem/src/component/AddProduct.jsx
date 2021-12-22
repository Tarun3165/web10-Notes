import axios from "axios";
import { useState } from "react";
import "../style/AddProduct.css"

const AddProduct = () => {
    const [formdata, setFormdata] = useState({});

    const handleChange = ((e) => {
        const { name, value } = e.target
        setFormdata({
            ...formdata,
            [name]: value
        })
        
    })
    return (
        <div className="formContainer">
           <input  onChange={handleChange} name="product_name" type="text" placeholder="Enter Product Name" />
           <input  onChange={handleChange} name="image_url" type="text" placeholder="Enter Inage Url" />
           <input  onChange={handleChange} name="description" type="text" placeholder="Enter Product Details" />
            <input onChange={handleChange} name="price"  type="text" placeholder="Enter Product Price" />
            <button onClick={() => {
                axios.post("http://localhost:3002/products", formdata)
                   
                
            } }>Add Product</button>
        </div>
    )
}

export default AddProduct