import { useState } from 'react';
import data from '../data.json'
import Items from './Items'
import "../style.css";
import { v4 as uuid } from 'uuid';



function Data({newData }) {
    

  const [restaurentdata, setRestaurentData] = useState(data) 
  const [allData, setAllData] = useState(data)
    
  const generateId = () => { 
      var updatedData= allData.map((item) => {
            var id = uuid();
          return (item.id === undefined ? { ...item,id:id}:item)
          
      })
    setAllData(updatedData)
    
    setAllData([...allData,newData])
    setRestaurentData(allData)
    // console.log(updatedData);
    
  }
       
  let sortedData=allData;
  const handleRatings = (star) => {
    
       sortedData =allData.filter((item) => {
        return (item.rating>=star&& item.rating<star+1)
    })
      setRestaurentData(sortedData)
  }


  const handlePayment = (method) => {
    
    sortedData = allData.filter((item) => {
         if(method==="card")
        return (item.payment_methods.card==="true"&&item.payment_methods.cash==="false"&&item.payment_methods.upi==="false" )
        else if(method==="cash")
        return (item.payment_methods.cash==="true"&&item.payment_methods.card==="false"&&item.payment_methods.upi==="false" )
        else if(method==="upi")
        return (item.payment_methods.upi==="true"&&item.payment_methods.cash==="false"&&item.payment_methods.card==="false" )
        else
         return false
    })
      setRestaurentData(sortedData)
  }

  const allRatings = () => {
    setRestaurentData(allData)
  } 
 
    
    return (
       <div>
        <h1>Filter </h1>
        <button onClick={generateId}>Generate Ids</button>
        <div className="stars">
          <button className="green" onClick={()=>handleRatings(1)}>1 Star</button>
          <button className="green" onClick={()=>handleRatings(2)}>2 Star</button>
          <button className="green" onClick={()=>handleRatings(3)}>3 Star</button>
          <button className="green" onClick={()=>handleRatings(4)}>4 Star</button>
          <button className="green" onClick={()=>allRatings()}>ALl Ratings</button>
        
          <button className="red" onClick={()=>handlePayment("card")}> Card only</button>
          <button className="red" onClick={()=>handlePayment("cash")}>Cash only</button>
          <button className="red" onClick={()=>handlePayment("upi")}>upi only</button>
          <button className="red" onClick={()=>allRatings()}>ALL </button>
        </div>
        <div className="parentDiv">
         {  restaurentdata.map((details) => {

           return <Items key={details.id} details={ details} />
           
         })}
        
      </div>
      </div>
    );
  }
  
  export default Data;
  