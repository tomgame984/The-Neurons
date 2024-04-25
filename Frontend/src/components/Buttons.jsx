import React, { useState } from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRoleIcon from '@mui/icons-material/HorizontalRule';


const Buttons = (props) => {

    const incrementCounter=() => {
        props.setCount(props.count + 1)
    };


    const decrementCounter=() => {
        props.setCount(props.count - 1)
    }
    return (
        <div role="power-buttons" >
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab 
        data-testid="button-test-down" 
        color="secondary" 
        aria-label="subtract" 
        onClick={decrementCounter}
        sx={{ width: '80px', height: '80px' }} 
        >
        <HorizontalRoleIcon />
        </Fab>
        <Fab data-testid="button-test-up" 
        color="primary" 
        aria-label="add" 
        onClick={incrementCounter}
        sx={{ width: '80px', height: '80px' }}
        >
        <AddIcon />
        </Fab>
        </Box>        
        </div>
    );    
}
export default Buttons;