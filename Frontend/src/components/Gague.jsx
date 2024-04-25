import React, { useState } from "react";
import Buttons from './Buttons'
import {
  Gauge,
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';


function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

function Gague() {
    const [count, setCount] = useState(0)

    const resetCount = () => {
        setCount(0)
    };
  
    return (
      <>
        <h1>Energy Counter</h1>
        <GaugeContainer
      valueMin={-10}
      valueMax={10}
      width={400}
      height={200}
      startAngle={-70}
      endAngle={70}
      value={count}
      >
    
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer />
      </GaugeContainer>
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
