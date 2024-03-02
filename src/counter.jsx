// import { useState } from "react";
// import "react";
// import React from "react"
import {useState} from "react";


function Counter(){
    //var count=0;
    const [count, setCount]= useState(0)

    const handleIncrement = () =>{
        console.log("Increment was clicked")
        console.log(count)
        setCount(count+1)
    }
    const handleDecrement =() =>{
        console.log("Decrement was clicked")
        if(count>0)
        {
            setCount(count-1)
        }

        // setCount(count-1)
        console.log(count)
    }
    const handleReset =() =>{
        console.log("Reset was clicked")
        setCount(0)
        console.log(count)
    }
    return(
        <div>


        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleReset}>Reset</button>

        </div>
    )
}
export default Counter;
