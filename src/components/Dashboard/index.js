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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getAsyncEvent()
      .then(result => {
        setEvents(result.data.events);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isError && <p>Something when wrong</p>}
      {isLoading ? <p>Loading...</p> : <EventList events={events} />}
    </div>
  );
};

export default Index;
