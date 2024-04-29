import Gague from "../components/Gague";
import { useState, useEffect } from "react";

export const Dashboard = () => {
    const [events, setEvents] = useState({});

    useEffect(() => {
        getUserEvents();
    }, []);

    const getUserEvents = () => {
        const storedEvents = JSON.parse(localStorage.getItem("events"));
        if (storedEvents) {
            setEvents(storedEvents);
        }
    };

    return (
        <>
            <div><Gague/></div>
            <div>
                {Object.keys(events).map((eventId) => (
                    <div key={eventId} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
                        <p role= "event-category">Category: {events[eventId].category}</p>
                        <p role="event-description">Description: {events[eventId].description}</p>
                        <p role= "event-score">Event Score: {events[eventId].eventScore}</p>
                    </div>
                ))}
            </div>
        </>
    );
};
