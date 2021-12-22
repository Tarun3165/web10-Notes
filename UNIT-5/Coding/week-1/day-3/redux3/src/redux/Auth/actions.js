import {   LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes.js"


//action Creators

export const loginLoading = (data) => {
    return { type: LOGIN_LOADING, payload: data }
}
export const loginSuccess = (data) => {
    return { type: LOGIN_SUCCESS, payload: data }
}
export const loginError = (data) => {
    return { type: LOGIN_ERROR, payload: data }
}