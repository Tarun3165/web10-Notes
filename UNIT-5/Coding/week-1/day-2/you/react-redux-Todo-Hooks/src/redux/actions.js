import axios from "axios"
import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, TOGGLE_TODO } from "./actionTypes.js"




export const addTodoLoading = () => {
    return { type: ADD_TODO_LOADING }
}
export const addTodoSuccess = (data) => {
    return { type: ADD_TODO_SUCCESS, payload: data }
}
export const addTodoError = (error) => {
    return { type: ADD_TODO_ERROR, payload: error }
}

export const getTodoLoading = () => {
    return { type: GET_TODO_LOADING }
}
export const getTodoSuccess = (data) => {
    return { type: GET_TODO_SUCCESS, payload: data }
}
export const getTodoError = (error) => {
    return { type: GET_TODO_ERROR, payload: error }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload:id
    }
}

export const deleteTodo = (id) => {
    return { type: DELETE_TODO, payload: id }
}

export const getTodo=(() => async(dispatch)=>{
    dispatch(getTodoLoading());
    try {
        const res = await axios.get("http://localhost:3001/todos")
      
        dispatch(getTodoSuccess(res.data));

    }
    catch(error)
    {
        dispatch(getTodoError(error.message));
    }
})