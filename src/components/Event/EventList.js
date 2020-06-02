import React from "react";
import Card from "../shared/Card";
import BaseButton from "../shared/BaseButton";
import Event from "./Event";

const EventList = props => {
  const handleAddButton = () => {
    console.log("Button clicked");
    props.onCreateModal();
  };

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <Card
          title="List of events"
          action={
            <BaseButton onClick={handleAddButton}>Create new event</BaseButton>
          }
        >
          <ul>
            {props.events.map(event => (
              <Event key={event.id} id={event.id} title={event.title} />
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
};

export default EventList;
