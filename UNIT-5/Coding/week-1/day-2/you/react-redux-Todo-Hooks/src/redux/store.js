import { createStore ,compose,applyMiddleware} from "redux"
import ReduxThunk from 'redux-thunk';
import { reducerFn } from "./reducer.js";



export const store = createStore(
    reducerFn,
    compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
