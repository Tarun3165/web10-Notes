import { createStore } from "redux"

import { reducerFn } from "./redux/reducer.js";
import { addCount ,addTodo} from "./redux/actions.js";



// class Store{
//     constructor(reducerFn,initialState) {
//         this.reducer = reducerFn;
//         this.state = initialState;
//     }

//     getState() {
//         return this.state;
//     }

//     dispatch(action) {
//        this.state= this.reducer(this.state,action)
//     }
// }

const initialState = {
    counter: 0,
    todos:[],
}

const store = createStore(reducerFn, initialState);




store.dispatch(addCount(1))
store.dispatch(addCount(2))

console.log(store.getState());

store.dispatch(addTodo({id:1,status:false,title:"learn redux"}))

console.log(store.getState());