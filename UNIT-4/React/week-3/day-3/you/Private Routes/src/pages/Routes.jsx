import PrivateRoute from "../component/PrivateRoutes"
import  Login  from '../component/Login';
import {Route,Switch} from "react-router-dom"


function Routes() {
   
    return (
      <div >
        
        <Switch>
          <Route exact path="/">Home Page</Route>
          <Route  path="/login"><Login/></Route>
          <PrivateRoute exact path="/dashboard" to="/login">welcome to Dashboard</PrivateRoute>
          <PrivateRoute path="/settings" to="/login">Settings</PrivateRoute>
          <Route> 404 page not found</Route>
        </Switch>
      </div>
    );
  }
  
  
  
  export default Routes;