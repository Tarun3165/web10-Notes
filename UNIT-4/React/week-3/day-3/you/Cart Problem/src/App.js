
import './App.css';
import {Route,Switch} from "react-router-dom"
import {Navbar} from "./component/Navbar"
import  Login  from './component/Login';
import PrivateRoute from "./component/PrivateRoutes"
  import Home from "./component/Home"
  import Cart from "./component/cartDetails"
  import AddProduct from "./component/AddProduct"
import ProductDetail from './component/productDetail';
function App() {
  const env = process.env.NODE_ENV;
  console.log(env);
  return (
    <div className="App">
     
      
      <Navbar />
      <br/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route  path="/productPage"><ProductDetail/></Route>
        <PrivateRoute path="/cart"  to="/login"><Cart/></PrivateRoute>
        <PrivateRoute path="/addProducts"  to="/login"><AddProduct/></PrivateRoute>
        <Route  path="/login"><Login/></Route>
        <Route> 404 page not found</Route>
      </Switch>
    </div>
  );
}



export default App;
