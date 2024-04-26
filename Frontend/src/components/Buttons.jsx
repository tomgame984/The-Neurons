import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRoleIcon from '@mui/icons-material/HorizontalRule';
import Box from '@mui/material/Box';


const Buttons = (props) => {

    const incrementCounter=() => {
        if (props.count <= 9){
        props.setCount(props.count + 1)
        }
    };


    const decrementCounter=() => {
        if (props.count >= -9){
        props.setCount(props.count - 1) 
        }
    };
    return (
        <div role="power-buttons" >
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab 
        data-testid="button-test-down" 
        color="#E76F51"
        aria-label="subtract" 
        onClick={decrementCounter}
        sx={{backgroundColor: '#E76F51', width: '80px', height: '80px' }} 
        >
        <HorizontalRoleIcon />
        </Fab>
        <Fab data-testid="button-test-up" 
        aria-label="add" 
        onClick={incrementCounter}
        sx={{ backgroundColor: '#55a630', width: '80px', height: '80px' }}
        >
        <AddIcon />
        </Fab>
        </Box>        
        </div>
    );    
}
export default Buttons;