import React, { useState } from "react";
import Gauge from "../components/Gauge"; // Add missing import statement for Gague component
import Buttons from "../components/Buttons";
import ResetButton from "../components/ResetButton";
import { Container } from "@mui/material";

export const Dashboard = () => {
  const [count, setCount] = useState(0);

  return (
    <Container sx={{justifyContent:"center"}}>
      <div>
        <h1>Energy Counter</h1>
        <Gauge setCount={setCount} count={count} />
        <Buttons/>
        <ResetButton setCount={setCount} />
      </div>
    </Container>
  );
};
