import { useState } from "react";



function Gague() {
    const [count, setCount] = useState(0)

    const resetCount = () => {
        setCount(0)
    };
  
    return (
      <>
        <h1>Energy Counter</h1>
        <div className="energy-Display">
          <p>
            {count}
            
          </p>
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