
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes.js"

const initialState = {
    loading: false,
    error: false,
    token:"",
}
export const authReducer = (state=initialState, { type, payload }) => {
    switch (type)
    {
        
        case LOGIN_LOADING: return {
            ...state,
         
              Loading: true,
           
            
        };
        case LOGIN_SUCCESS: return {
            ...state,
            Loading: false,
            token:payload
            
        };

        case LOGIN_ERROR: return {
            ...state,
            Loading: false,
            error:true
        };
      

        default: return {...state};
    }
   
}
