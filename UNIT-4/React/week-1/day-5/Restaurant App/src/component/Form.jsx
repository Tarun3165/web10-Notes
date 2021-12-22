import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const initState = {
  image: "",
  name: "",
  type: "",
  cost: "",
  rating: "",
  votes: "",
  reviews: "",
  cost_for_two: "",
}

function Forms({details}) {

  const [formData, setFormData] = useState(initState)
  
  const handleChange = (e) => {
  // console.log(e.target.name);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const submitfn = () => {
    
    // console.log(formData);
    details(formData);
  }
  
  return (
    
    <div className="formDiv">
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image Url</Form.Label>
    <Form.Control onChange={handleChange}  type="text" name="image" placeholder="Enter Image Url" />
    <Form.Text className="text-muted"> </Form.Text>  
  </Form.Group>
  

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control onChange={handleChange} type="text" name="name" placeholder="Enter Name" />
        </Form.Group>
        
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Type</Form.Label>
    <Form.Control onChange={handleChange} type="text" name="type" placeholder="Enter Type" />
        </Form.Group>
        
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Rating</Form.Label>
    <Form.Control onChange={handleChange} type="number" name="rating" placeholder="Enter Rating" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Cost</Form.Label>
    <Form.Control onChange={handleChange} type="number" name="cost" placeholder="Enter Cost" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Votes</Form.Label>
    <Form.Control onChange={handleChange} type="number" name="votes" placeholder="Enter Votes" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Reviews</Form.Label>
    <Form.Control onChange={handleChange} type="number" name="reviews" placeholder="Enter Reviews" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Cost for two</Form.Label>
    <Form.Control onChange={handleChange} type="number" name="cost_for_two" placeholder="Enter Cost for two" />
  </Form.Group>
        
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
        <Button onClick={submitfn } variant="primary">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default Forms;
