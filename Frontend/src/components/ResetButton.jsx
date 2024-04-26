import React, { useState } from "react";
import { Button } from "@mui/material";

const ResetButton = (props) => {
  const resetCount = () => {
    props.setCount(0);
  };

  return (
    <Button
      sx={{ backgroundColor: "#474973", color: "white", "&:hover": { bgcolor: "#474973"}, marginBottom: "20px"}}
      variant="contained"
      onClick={resetCount}
      alt="reset-button"
      role="reset-button"
    >
      RESET
    </Button>
  );
};

export default ResetButton;
