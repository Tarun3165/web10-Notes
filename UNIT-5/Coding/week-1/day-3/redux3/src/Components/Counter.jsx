import { useEffect } from "react";
import { useSelector,useDispatch ,shallowEqual} from "react-redux"

import { addCount, reduceCount } from "../redux/Todos/actions"

export const Counter = () => {
    const counter = useSelector((state) =>  state.todos.counter,shallowEqual)
    console.log(counter);
    const dispatch = useDispatch();
  useEffect(() => {
      
    let count = JSON.parse(localStorage.getItem("counter"))
    dispatch(addCount(count));
    
  },[])
  
  let count=JSON.parse( localStorage.getItem("counter"))
  return <div>
           <h2>Counter:{count}</h2>
      <button onClick={() => {
        dispatch(addCount(1));
        localStorage.setItem("counter", JSON.stringify(counter))
      }}>
       add by 1
      </button>
      <button onClick={() => {
        dispatch(reduceCount(1));
        localStorage.setItem("counter", JSON.stringify(counter))

      }}>
        reduce by 1
      </button>
    </div>
}