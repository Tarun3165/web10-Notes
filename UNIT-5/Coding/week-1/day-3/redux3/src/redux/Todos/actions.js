import axios from "axios"
import { ADD_COUNT,  ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REDUCE_COUNT } from "./actionTypes.js"
// import {v4 as uuid} from "uuid"

//action Creators
export const addCount = (data) => {
    return { type: ADD_COUNT, payload: data }
}
export const reduceCount = (data) => {
    return { type: REDUCE_COUNT, payload: data }
}

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

