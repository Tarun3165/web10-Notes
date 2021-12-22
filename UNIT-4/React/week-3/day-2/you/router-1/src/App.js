import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/index'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Switch>
     <Route exact path="/">Home Page</Route>
     <Route  path="/contact">Contact Page</Route>
     <Route path="/about-us">About Page</Route>
     <Route  path="/services">Services Page</Route>
     <Route  path="/login">Login Page</Route>
     </Switch>
   </BrowserRouter>
  )
}

export default App