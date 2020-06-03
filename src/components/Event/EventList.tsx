import React from "react";
import Card from "../shared/Card";
import BaseButton from "../shared/BaseButton";
import Event from "./Event";
import Loading from "../shared/Loading";

type Event = {
  id: number;
  name: string;
  link: string;
  type: string;
};

const EventList = (props: {
  onCreateModal: () => void;
  isLoading: boolean;
  events: Array<Event>;
}) => {
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
          {props.isLoading ? (
            <Loading />
          ) : (
            <ul>
              {props.events.map(event => (
                <Event key={event.id} id={event.id} title={event.name} />
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
};

export default EventList;
