import React, { useEffect, useState } from "react";
import Gauge from "../components/Gauge"; // Add missing import statement for Gague component
import Buttons from "../components/Buttons";
import ResetButton from "../components/ResetButton";
import { Container } from "@mui/material";
import { green } from "@mui/material/colors";
import ActivityForm from "../components/ActivityForm";

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

  return (
    <Container
      sx={{
        borderRadius: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        boxShadow: "0px 0px 58px -29px rgba(0,0,0,0.75)",
        minWidth: "690px",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Energy Counter</h1>
        <Gauge setCount={setCount} count={count} />
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
        ></ActivityForm>
        <ResetButton setCount={setCount} />
      </div>
    <div>
      {Object.keys(events).map((eventId) => (
          <div key={eventId} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
          <p role="event-category">Category: {events[eventId].category}</p>
          <p role="event-description">Description: {events[eventId].description}</p>
          <p role="event-score">Event Score: {events[eventId].eventScore}</p>
        </div>
      ))}
    </Container>
  );
}

