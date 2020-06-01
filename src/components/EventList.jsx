import React from "react";

const EventList = props => {
  return (
    <ul>
      {props.events.map(event => (
        <li key={event.id}>
          {event.title} {event.link}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
