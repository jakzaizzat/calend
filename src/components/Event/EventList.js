import React from "react";
import Card from "../shared/Card";
import BaseButton from "../shared/BaseButton";
import Event from "./Event";
import Loading from "../shared/Loading";

const EventList = props => {
  const handleAddButton = () => {
    console.log("Button clicked");
    props.onCreateModal();
  };

  return (
    <>
      <div className="max-w-2xl mx-auto my-5">
        <Card
          title="List of events"
          action={
            <BaseButton onClick={handleAddButton}>Create new event</BaseButton>
          }
        >
          {props.isLoading ? (
            <div className="my-3">
              <Loading color="#333333" />
            </div>
          ) : (
            <ul>
              {props.events.map(event => (
                <Event key={event.id} event={event} id={event.id} title={event.title} duration={event.duration} />
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
};

export default EventList;
