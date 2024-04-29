import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const ActivityForm = () => {
  return (
    <>
      <Box sx={{bgcolor:"#ddd", borderRadius:"30px", padding:"10px"}}>
        <h2 style={{marginTop:"-5px"}}>Log Activity</h2>
        <TextField id="outlined-basic" label="Description" variant="outlined"></TextField>
      </Box>
    </>
  );
};

export default ActivityForm;
