import React, { useState } from "react";
import Buttons from "./Buttons";
import ResetButton from "../components/ResetButton";

import {
  GaugeContainer,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

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
      <circle cx={cx} cy={cy} r={7} fill="#474973" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="#474973"
        strokeWidth={5}
      />
    </g>
  );
}

function Gauge(props) {
  return (
    <>
      <GaugeContainer
        valueMin={-10}
        valueMax={10}
        width={600}
        height={200}
        startAngle={-70}
        endAngle={70}
        value={props.count}
      >
        <defs>
          <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E76F51" />
            <stop offset="100%" stopColor="#55a630" />
          </linearGradient>
        </defs>
        <GaugeReferenceArc
          sx={{
            fill: "url(#gaugeGradient)",
          }}
        />
        <GaugePointer />
      </GaugeContainer>
      <div className="energy-Display">
        <p data-testid="counter">{props.count}</p>
      </div>
    </>
  );
}

export default Gauge;
