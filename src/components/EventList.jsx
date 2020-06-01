import React from "react";
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

const EventList = () => {
  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          {event.title} {event.link}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
