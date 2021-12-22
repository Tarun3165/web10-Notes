import { createStore ,combineReducers,applyMiddleware,compose} from "redux"
import ReduxThunk from 'redux-thunk';

import { todosReducer } from "./Todos/reducer.js";
import { authReducer } from "./Auth/reducer.js";



// const middleware2 = (store) => (next) => (action) => {    //using middleware so that it suppports asyncronous action functions
    
//     console.log("before MW2");
//     if (typeof actions === "function") {
//         action(store.dispatch)
//     }
//     next(action);
//     console.log("after MW2");
//     return 
// }

const rootReducer = combineReducers({ todos: todosReducer, auth: authReducer })

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
    
    
  