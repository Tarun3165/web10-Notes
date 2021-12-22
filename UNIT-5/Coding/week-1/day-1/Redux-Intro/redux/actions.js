import { ADD_COUNT, ADD_TODO, REDUCE_COUNT } from "./actionTypes.js"


//action Creators
export const addCount = (data) => {
    return { type: ADD_COUNT, payload: data }
}
export const addTodo = (data) => {
    return { type: ADD_TODO, payload: data }
}