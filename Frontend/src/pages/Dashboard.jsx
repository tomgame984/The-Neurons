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
  const [category, setCategory] = useState("")

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

  const handleCategoryChange = (name) => {
    setCategory(name);
  };


  return (
    
    <Container
    
      sx={{
        borderRadius: "80px",
        display: "flex",
        flexDirection: "column", 
        alignItems: "center", 
        backgroundColor: "#eee",
        boxShadow: "0px 0px 58px -29px rgba(0,0,0,0.75)",
        minWidth: "690px",
        padding: "20px", 
      }}
    >
      <button onClick={handleLogout}
      style={{
        marginBottom: "20px", 
        alignSelf: "flex-end", 
      }}
      >Logout</button>
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
          handleCategoryChange={handleCategoryChange}
          
          id="buttons"
        />
        <ActivityForm
          open={open}
          handleOpen={handleOpen}
          count={count}
          setCount={setCount}
          category={category}
          handleCategoryChange={handleCategoryChange}

        />
        <div style={{ display: "flex", justifyContent: "center" }}>
        <ResetButton setCount={setCount} />
        </div>
      </div>
      <div>
        {Object.keys(events).map((eventId) => (
          <div key={eventId} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
            <p role="event-category">Category: {category}</p>
            <p role="event-description">Description: {events[eventId].description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}