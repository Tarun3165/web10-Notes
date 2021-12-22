
import './App.css';
import {Route,Switch} from "react-router-dom"
import {Navbar} from "./component/Navbar"
import { UserDetails } from './component/UserDetails';
import { Users } from './component/Users';
import  Login  from './component/Login';
import PrivateRoute from "./component/PrivateRoutes"
  
function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  return (
    <div className="App">
      <h1>{baseUrl}</h1>
      
      <Navbar />
      <br/>
      <Switch>
        <Route exact path="/">Home Page</Route>
        <Route path="/about">About Page</Route>
        <Route path="/contact">Contact Page</Route>
        <Route  path="/login"><Login/></Route>
        <PrivateRoute exact path="/users" to="/login"><Users/></PrivateRoute>
        <PrivateRoute path="/users/:id" to="/login"><UserDetails/></PrivateRoute>
        <Route> 404 page not found</Route>
      </Switch>
    </div>
  );
}



export default App;
