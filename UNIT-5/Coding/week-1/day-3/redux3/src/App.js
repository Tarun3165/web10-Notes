

import { Route, Switch } from "react-router";
import "./App.css"
import { Counter } from "./Components/Counter";
import { Login } from "./Components/Login";
import { Todo } from "./Components/Todos";

function App() {
  
  
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/todos">
          <Todo/>
        </Route>
        <Route exact path="/counter">
          <Counter/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
