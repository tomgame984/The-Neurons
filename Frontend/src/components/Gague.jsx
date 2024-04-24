import { useState } from "react";
import Buttons from './Buttons'



function Gague() {
    const [count, setCount] = useState(0)

    const resetCount = () => {
        setCount(0)
    };
  
    return (
      <>
        <h1>Energy Counter</h1>
        <div className="energy-Display">
          <p data-testid="counter">
            {count}
            
          </p>

          <Buttons setCount={setCount} count={count}/>

          <button 
          onClick={resetCount}
          alt="reset-button"
          role="reset-button"
          >RESET</button>
        </div>
      </>
    )
  };

export default Gague;