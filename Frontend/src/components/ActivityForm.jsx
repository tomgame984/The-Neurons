import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

const ActivityForm = (props) => {
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
          <Button variant="contained">Submit</Button>
        </Box>
      </>
    );
  }
};

export default ActivityForm;
