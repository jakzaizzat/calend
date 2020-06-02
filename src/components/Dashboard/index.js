import React, { useEffect, useState } from "react";
import EventList from "../Event/EventList";

const initialEvents = [
  {
    id: 1,
    title: "30 minutes consultation",
    active: true,
    link: "http://google.com"
  },
  {
    id: 2,
    title: "15 minutes consultation",
    active: false,
    link: "http://google.com"
  }
];

const Index = () => {
  const getAsyncEvent = () => {
    return new Promise(resolve =>
      setTimeout(() => resolve({ data: { events: initialEvents } }), 2000)
    );
  };
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getAsyncEvent().then(result => {
      setEvents(result.data.events);
    });
  }, []);

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default Index;
