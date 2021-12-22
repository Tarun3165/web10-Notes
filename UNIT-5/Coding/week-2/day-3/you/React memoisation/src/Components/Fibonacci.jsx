import { useMemo, useState} from "react";

const fib = (n) => {
  if (n <= 1)
    return 1;
  return fib(n-1)+fib(n-2)
}

function Fibonacci() {
  const [f, setF] = useState(30);
  
  const MemoisedFibonacci = useMemo(() => {
    console.log("cal..");
  return fib(f)
  },[f]);
  
  return (

    <div >
      {/* Fibonacci is {Fibonacci} */}
      <button onClick={() => {
        console.time("T")
     console.log(MemoisedFibonacci);
        console.timeEnd("T")
      }}>calculate time</button>
    </div>
  );
}
export default Fibonacci;
