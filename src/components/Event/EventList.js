import React from "react";
import Card from "../shared/Card";
import BaseButton from "../shared/BaseButton";
import Event from "./Event";

const EventList = ({ events }) => {
  const handleAddButton = () => {
    console.log("Button clicked");
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
            {events.map(event => (
              <Event key={event.id} title={event.title} />
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
};

export default EventList;
