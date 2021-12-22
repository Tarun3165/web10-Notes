
import {  useEffect, useState } from "react";
import { Modal ,Button} from "react-bootstrap"
import { useSelector ,useDispatch} from "react-redux";
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import {  getTodo } from "../redux/actions";
import { useHistory } from "react-router";

export const ModalR = () => {
  const history = useHistory();
  
  const {data} = useSelector((state) =>  state.todos)
  const dispatch = useDispatch();

  const params = useParams();

    useEffect(() => {
      dispatch(getTodo())
      
  },[])
    
  const [newData, setNewData] = useState({})

  useEffect(() => {
    for (let i = 0; i < data.length;i++)
    {
        if(data[i].id==params.id)
        setNewData(data[i])
      
    }
  }, [data])

 

  const handleToggle = async (id) => {

    const res = await axios.get(`http://localhost:3001/todos/${id}`)
    const Data1 = {
      status:!res.data.status
    }
    
    await axios.patch(`http://localhost:3001/todos/${id}`, Data1)
    
    dispatch(getTodo())
      
   

}

const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)
  // setNewData({})
    dispatch(getTodo())
    history.push("/")
    
  }
  
  // console.log("newData",newData);
  // console.log("data", data);
  
  const handleBack = (() => {
        
    history.push("/")
   })

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <h3>{ newData.title}</h3>
      <Button variant="primary" onClick={handleShow}>
       Open Modal
      </Button>{" " }
      <Button variant="secondary" onClick={handleBack}>
      GO to Home
      </Button>
      
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{newData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            newData.status ?
            <Button onClick={()=>handleToggle(newData.id)} variant="success">Done</Button>
            :
            <Button onClick={()=>handleToggle(newData.id)} variant="warning">Not Done</Button>
            
          }

          {" "}<Button onClick={()=>handleDelete(newData.id)}  variant="danger">Delete</Button>

          {" "}<Button  variant="secondary">
            
            <Link style={{color:"white"}} to={`/todo/${newData.id}/edit`}>Edit</Link>
          </Button>

        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

   

