
import { ADD_COUNT,  ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REDUCE_COUNT } from "./actionTypes.js"

const initialState = {
    counter: 0,
    todos: {
        isLoading: false,
        isError: false,
        data:[]
    }
}
export const todosReducer = (state=initialState, { type, payload }) => {
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

        
        case ADD_TODO_LOADING: return {
            ...state,
            todos: {
                ...state.todos,
                isLoading: true,
               }
            
        };
        case ADD_TODO_SUCCESS: return {
            ...state,
            todos: {
                ...state.todos,
                isLoading: false,
                isError:false
               }
            
        };

        case ADD_TODO_ERROR: return {
            ...state,
            todos: {
                ...state.todos,
                isLoading: false,
                isError:true
               }
            
        };
        
        case GET_TODO_LOADING: return {
            ...state,
            todos: {
                ...state.todos,
                isLoading: true,
               }
            
        };
        case GET_TODO_SUCCESS: return {
            ...state,
            todos: {
                ...state.todos,
                isLoading: false,
                isError: false,
                data:[...payload]
               }
            
        };

        case GET_TODO_ERROR: return {
            ...state,
            todos: {
                ...state.todos,
                isLoading: false,
                isError:true
               }
            
        };

        default: return {...state};
    }
   
}
