import React from "react";
import EventList from "./EventList";

const events = [
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

const MyComponent = () => {
  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default MyComponent;
