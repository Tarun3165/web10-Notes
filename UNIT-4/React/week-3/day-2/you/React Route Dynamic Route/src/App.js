
import './App.css';
import {Route,Switch} from "react-router-dom"
import {Navbar} from "./component/Navbar"
import { ProductDetails } from './component/ProductDetails';
import { Products } from './component/Products';
function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <Switch>
        <Route exact path="/">Home Page</Route>
        <Route exact path="/products"><Products/></Route>
        <Route path="/products/:id"><ProductDetails/></Route>
        <Route> 404 page not found</Route>
      </Switch>
    </div>
  );
}



export default App;
