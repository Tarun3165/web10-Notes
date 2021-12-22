
import {Todo} from "./Components/Todos"
import { Route, Switch } from "react-router";
import "./App.css";
import { ModalR } from "./Components/Modal";
import { Edit } from "./Components/Edit";
// import { Modal } from "react-bootstrap";

function App() {
  
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Todo/>
        </Route>  
        <Route exact path="/todo/:id">
           <ModalR/>
        </Route>  
        <Route exact path="/todo/:id/edit">
           <Edit/>
        </Route>  
        
      </Switch>
    
    </div>

  );
}

export default App;
