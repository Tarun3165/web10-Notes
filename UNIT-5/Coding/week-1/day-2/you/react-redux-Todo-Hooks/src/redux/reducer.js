
import { DELETE_TODO, TOGGLE_TODO, GET_TODO_ERROR, GET_TODO_SUCCESS, GET_TODO_LOADING, ADD_TODO_ERROR, ADD_TODO_SUCCESS, ADD_TODO_LOADING} from "./actionTypes.js"

const initialState = {
    todos: {
        isLoading: false,
        isError: false,
        data:[]
    }
}

export const reducerFn = (state=initialState, { type, payload }) => {
    switch (type)
    {
        
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
       

        case TOGGLE_TODO: return {
            ...state,
            todos: state.todos.map((e) => {
                if (e.id === payload)
                    e.status = !e.status;
                
                return e;
                })
               
        };

        case DELETE_TODO: return {
            ...state,
               todos: state.todos.filter((e) => {
               return e.id !== payload;
               })
        };

        default: return {...state};
    }
   
}
