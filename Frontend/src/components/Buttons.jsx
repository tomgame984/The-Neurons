import { useState } from "react";

const Buttons = (props) => {

    const incrementCounter=() => {
        props.setCount(props.count + 1)
    };


    const decrementCounter=() => {
        props.setCount(props.count - 1)
    }
    return (
        <div role="power-buttons" >
        <button data-testid="button-test-down" onClick={decrementCounter}>Power Down</button>
        
        <button data-testid="button-test-up" onClick={incrementCounter}>Power Up</button>
        
        </div>
    );    
}
export default Buttons;