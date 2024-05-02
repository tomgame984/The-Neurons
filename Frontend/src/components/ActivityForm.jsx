import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { putUserEvent } from "../services/users"

const ActivityForm = (props) => {
  const [increment, setIncrement] = useState("")
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [score, setscore] = useState();
  
  // const handleNumber = (num, event) => {
  //   setIncrement(Number(num))
  // };
  
  const handleScoreChange = (event) => {
    const value = event.target.value;
    if (/^-?\d*$/.test(value)) { 
      setIncrement(parseInt(value)); 
      setscore(value); 
    }
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
  
  const handleCategoryChange = (event) => {
    setcategory(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setdescription(event.target.value);
  };

  // const handleScoreChange = (event) => {
  //   setscore(event.target.value);
  // };

  const handleActivitySubmitToDB = async() => {
    const token = localStorage.getItem("token")
    const userid = localStorage.getItem("userId")
    console.log(token, userid)
    const userActivity = {
      category: "Work",
      description: description,
      eventScore:score
    }
    try {
      await putUserEvent(token, userid, userActivity);
      console.log("Submit event listener triggered")
    } catch (err) {
      console.error(err);
    }

  }
  console.log(description,score)
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
            value={description}
            onChange={handleDescriptionChange}
            
          ></TextField>
          <TextField
            data-testid="scoreField"
            id="outlined-basic"
            label="Score"
            variant="outlined"
            value={score}
            onChange={handleScoreChange}
      
              
          ></TextField>
          <Button
            variant="contained"
            onClick={() => {
              handleActivitySubmitToDB()
              incrementCounter(increment);
              props.handleOpen();
            }}
          >Submit
          </Button>
        </Box>
      </>
    );
  }
};

export default ActivityForm;
