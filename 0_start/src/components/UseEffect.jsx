import { useEffect, useState } from "react";

const UseEffect = () => {
    
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(10);
    const num1Change = () => {
        setNum1(num1 + 1);
    }
    const num2Change = () => {
        setNum2(num2 + 10);
    }

    useEffect(() => {
        console.log("Use effect is runing")
    }, [num1]);//here we have proived array as dependecy so the things that are gonna get written inside the array only for thsoe use effect will run 
  return (
    <div>
      <p>Here i will learn about use effect and how it works why it used</p>
      <p>Use effect helps us to run multiple task parralally</p>
        <div>num1 {num1}</div>
        <div>num2 {num2}</div>
      <button  className="mx-4  p-4 bg-blue-700 rounded-lg w-1/10" onMouseEnter={num1Change} onMouseLeave={num2Change}>click me</button>
    </div>
  )
}

export default UseEffect
