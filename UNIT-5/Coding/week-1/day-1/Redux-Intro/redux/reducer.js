
import { ADD_COUNT, ADD_TODO, REDUCE_COUNT } from "./actionTypes.js"


export const reducerFn = (state, { type, payload }) => {
    switch (type)
    {
        case ADD_COUNT: return {
            ...state,
            counter: state.counter + payload,
        };

        case REDUCE_COUNT: return {
            ...state,
            counter: state.counter - payload,
        };

        case ADD_TODO: return {
            ...state,
               todos: [...state.todos,{...payload}],
            
        };

        default: return {...state};
    }
   
}
