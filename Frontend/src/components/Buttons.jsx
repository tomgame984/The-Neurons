import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRoleIcon from "@mui/icons-material/HorizontalRule";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"


const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const Buttons = (props) => {
  const incrementCounter = () => {
    if (props.count <= 9) {
      props.setCount(props.count + 1);
    }
  };

  const decrementCounter = () => {
    if (props.count >= -9) {
      props.setCount(props.count - 1);
    }
  };

  return (
    <Box sx={{ height: 100, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 40, left: 320, color: "#55A630"}}
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
          sx={{color: 'white', backgroundColor: '#55A630', "&:hover": {bgcolor: "#55A630"}}}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {incrementCounter(); props.setOpen(true)}}
          />
        ))}
      </SpeedDial>

      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 40, right: 320}}
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
            sx={{color: 'white', backgroundColor: '#E76F51', "&:hover": {bgcolor: "#E76F51"}}}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {decrementCounter(); props.setOpen(true)}}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
export default Buttons;
