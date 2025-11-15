import React,{ useState } from "react";
// import Button from "./button";
import '../Styles/cardcounter.css';



const CardCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {    setCount(count + 1);};
    const decrement = () => {    setCount(count - 1);};


    return (
        <div>
            <h2>Card Counter Component</h2>
            <p>Count: {count} clicks </p>
            <button className="greenbtn" onClick={increment}>Increase</button>
            <button className="redbtn" onClick={decrement}>Decrease</button>   
        </div>
    );
};

export default CardCounter;