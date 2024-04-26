import React, { useState } from "react";
import Gauge from "../components/Gauge"; // Add missing import statement for Gague component
import Buttons from "../components/Buttons";
import ResetButton from "../components/ResetButton";

export const Dashboard = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Energy Counter</h1>
        <Gauge setCount={setCount} count={count} />
        <Buttons setCount={setCount} count={count} />
        <ResetButton setCount={setCount} />
      </div>
    </>
  );
};
