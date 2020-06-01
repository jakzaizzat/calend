import React from "react";

const EventList = ({ events }) => {
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
