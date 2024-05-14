import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import GroupsIcon from '@mui/icons-material/Groups';
import WeekendIcon from '@mui/icons-material/Weekend';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PsychologyIcon from '@mui/icons-material/Psychology';
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Box from "@mui/material/Box";

const actions = [
  { icon: <GroupsIcon />, name: "Social" },
  { icon: <WeekendIcon />, name: "Rest" },
  { icon: <DirectionsRunIcon />, name: "Physical" },
  { icon: <PsychologyIcon />, name: "Mental" },
];



const Buttons = (props) => {
  const [openButton1, setOpenButton1] = useState(false);
  const [openButton2, setOpenButton2] = useState(false);

  const handleOpenButton = (buttonNum) => {
    if (buttonNum === 1) {
      if (openButton2 === true && openButton1 === false) {
        setOpenButton2(false);
      }
      setOpenButton1(!openButton1);
    } else if (buttonNum === 2) {
      if (openButton2 === false && openButton1 === true) {
        setOpenButton1(false);
      }
      setOpenButton2(!openButton2);
    }
  };

  const incrementCounter = () => {
    if (props.count <= 9) {
      props.setCount(props.count + 1);
    }
  };
  
  const decrementCounter=() => {
    if (props.count >= -9){
      props.setCount(props.count - 1) 
    }
  };

  const setCategoryChange=(name) => {
    props.handleCategoryChange(name)
  };

  return (
    <Box sx={{ height: 100, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        onClick={() => handleOpenButton(1)}
        open={openButton1}
        ariaLabel="Power Up"
        sx={{ position: "absolute", bottom: 40, left: 320, color: "#55A630" }}
        FabProps={{
          sx: {
            bgcolor: "#55A630",
            width: "80px",
            height: "80px",
            "&:hover": {
              bgcolor: "#55A630",
            },
          },
        }}
        icon={<KeyboardDoubleArrowUpIcon />}
        direction="right"
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={{
              color: "white",
              backgroundColor: "#55A630",
              "&:hover": { bgcolor: "#55A630" },
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              props.handleOpen();
              setCategoryChange(action.name);
            }}
            data-testid="speed-dial-action-Increase Speed"
          />
        ))}
      </SpeedDial>

      <SpeedDial
        onClick={() => handleOpenButton(2)}
        open={openButton2}
        ariaLabel="Power Down"
        sx={{ position: "absolute", bottom: 40, right: 320 }}
        FabProps={{
          sx: {
            bgcolor: "#E76F51",
            width: "80px",
            height: "80px",
            "&:hover": {
              bgcolor: "#E76F51",
            },
          },
        }}
        icon={<KeyboardDoubleArrowDownIcon />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            className="powerdown"
            sx={{
              color: "white",
              backgroundColor: "#E76F51",
              "&:hover": { bgcolor: "#E76F51" },
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              props.handleOpen();
              setCategoryChange(action.name);
            }}
            data-testid="speed-dial-action-Decrease Speed"
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
export default Buttons;
