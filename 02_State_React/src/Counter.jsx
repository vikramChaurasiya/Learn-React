import { useState } from "react";

export default function Counter(){
    let [count,setCount] = useState(0); //initialization.
    let incCount = () =>{
        // setCount(count +1);
        // setCount(25);
        setCount((currCount) =>{ //callback updater function use 
            return currCount+1;
        })
        setCount((currCount) =>{
            return currCount+1;
        })

    };
    return(
        <div>
            <h3>count = {count}</h3>
            <button onClick={incCount} >Increase Count</button>
        </div>
    );
}  