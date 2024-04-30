import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

const ActivityForm = (props) => {
    const [increment, setIncrement] = useState("")

    const handleNumber = (num) => {
        setIncrement(Number(num))
    };

  const incrementCounter = (num) => {
    if (props.count <= 9) {
      props.setCount(props.count + Number(num));
    }
  };

  const decrementCounter = (num) => {
    if (props.count >= -9) {
      props.setCount(props.count - num);
    }
  };


  if (props.open == true) {
    return (
      <>
        <Box sx={{ bgcolor: "#ddd", borderRadius: "30px", padding: "10px" }}>
          <h2 style={{ marginTop: "-5px" }}>Log Activity</h2>
          <IconButton onClick={() => props.handleOpen()}>
            <CloseIcon />
          </IconButton>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Score"
            variant="outlined"
            onChange={(event) => {handleNumber(parseInt(event.target.value))}}
          ></TextField>
          <Button
            variant="contained"
            onClick={() => {
              incrementCounter(increment);
              props.handleOpen();
            }}
          >
            Submit
          </Button>
        </Box>
      </>
    );
  }
};

export default ActivityForm;
