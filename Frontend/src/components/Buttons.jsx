import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRoleIcon from "@mui/icons-material/HorizontalRule";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
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
    <div role="power-buttons">
      <Box sx={{height:"100px", width:"600px", flexGrow:1}}>
      <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ Color: "#55a630", display: "inline-block", marginRight:"-150px"}}
          icon={<SpeedDialIcon />}
          direction="left"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ Color: "#55a630", display: "inline-block"}}
          icon={<SpeedDialIcon />}
          direction="right"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
};
export default Buttons;
