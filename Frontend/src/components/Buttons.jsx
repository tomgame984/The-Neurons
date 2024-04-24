import { useState } from "react";
const Buttons = () => {
    const [count, setCount] = useState(0);
    const incrementCounter=() => {
        setCount(count + 1)
    };
    const decrementCounter=() => {
        setCount(count - 1)
    }
    return (
        <div >
        <h1 data-testid="counter-test">{count}</h1>
        <button data-testid="button-test-down" onClick={decrementCounter}>Power Down</button>
        
        <button data-testid="button-test-up" onClick={incrementCounter}>Power Up</button>
        
        </div>
    );    
}
export default Buttons;