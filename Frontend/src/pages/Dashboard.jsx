import React, { useEffect, useState } from "react";
import Gauge from "../components/Gauge"; // Add missing import statement for Gague component
import Buttons from "../components/Buttons";
import ResetButton from "../components/ResetButton";
import { Button } from "@mui/material";
import { green } from "@mui/material/colors";
import ActivityForm from "../components/ActivityForm";
import { Box, Container } from "@mui/material";

export const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [events, setEvent] = useState({});

  useEffect(() => {
    getUserEvents();
  }, []);

  const getUserEvents = () => {
    const events = JSON.parse(localStorage.getItem("events"))
    setEvent(events)
  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    
    <>
      <img src="/src/assets/image.png" style={{height: "80px", position: "absolute", left: "10px", top: "10px"}}></img>
      <Box
    
        sx={{
          borderRadius: "80px",
          display: "flex",
          flexDirection: "column", 
          alignItems: "center", 
          backgroundColor: "#eee",
          boxShadow: "0px 0px 58px -29px rgba(0,0,0,0.75)",
          margin: "20px",
          minWidth: "690px",
        padding: "20px", 
        }}
      >
     
        <div>
          <h1 style={{ textAlign: "center", marginBottom: "20px"}}>Energy Counter</h1>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Gauge setCount={setCount} count={count} />
        </div>
          <Buttons
            setCount={setCount}
            count={count}
            open={open}
            handleOpen={handleOpen}
            id="buttons"
          />
          <ActivityForm
            open={open}
            handleOpen={handleOpen}
            count={count}
            setCount={setCount}
          />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ResetButton setCount={setCount} />
        </div>
        </div>
      </Box>
      <Button onClick={handleLogout}
      variant="text"
      sx={{
        marginBottom: "20px",
        position:  "absolute",
        right: "10px",
        top: "10px",
        color: "red"
      }}
      >Logout</Button>
      <div>
        {Object.keys(events).map((eventId) => (
          <Box
            key={eventId}
            sx={{
              padding: "10px",
              marginBottom: "10px",
              bgcolor: "#f0f0f0",
              borderRadius: "10px",
              maxWidth: "450px",
              boxShadow: "0px 0px 9px -3px rgba(143,143,143,1)",
              alignSelf: "center",
              marginInline: "auto",
              marginbottom: "10px",
            }}
          >
            <p role="event-category">Category: {events[eventId].category}</p>
            <p role="event-description">
              Description: {events[eventId].description}
            </p>
            <p role="event-score">Event Score: {events[eventId].eventScore}</p>
          </Box>
        ))}
      </div>
    </>
  );
};
