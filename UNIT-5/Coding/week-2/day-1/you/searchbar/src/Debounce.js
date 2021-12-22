import { useState } from 'react';
import { useFetch } from './Utils/useFetch';



export function debouncer( delay, handleChange ){
  var debounce;
  return function(args){
      debounce && clearTimeout(debounce);
      debounce = setTimeout(function(){
          handleChange(args)
      },delay)
  }
}

function Debounce() {
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const debouncerFn = debouncer(200, handleChange)
  const [query,setQuery]=useState("")

  const {loading,error,data}= useFetch(`https://api.github.com/search/users?q=${query}&per_page=3`)
  
  // console.log(query,loading,error,data);

  
  return (
    
    loading ?
      "...loading"
      
    : error ? 
      "...error"
        :
       data ?    
          
     (data.map((e) => {
     return (
      <div key={e.id} >{e.login}</div>
       )
     }))
          
          :
          <input onChange={(args) => debouncerFn(args)} type="search" placeholder="search" />
   
     
   
          
   
  )

}

export default Debounce;
