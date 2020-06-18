import React, { useState } from "react";
import Card from "../shared/Card";
import BaseButton from "../shared/BaseButton";
import Event from "./Event";
import Modal from "../shared/Modal";
import NewEvent from "./NewEvent";

const EventList = ({ events }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {isModalOpen ? (
        <Modal title="Add new event" onClose={() => setModalOpen(false)}>
          <NewEvent onClose={() => setModalOpen(false)} />
        </Modal>
      ) : null}
      <div className="max-w-2xl mx-auto my-5">
        <Card
          title="List of events"
          action={
            <BaseButton
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Create new event
            </BaseButton>
          }
        >
          {events.length > 0 ? (
            <ul>
              {events.map((event) => (
                <Event key={event.id} event={event} />
              ))}
            </ul>
          ) : (
            <p className="my-3 text-center">There is no events</p>
          )}
        </Card>
      </div>
    </>
  );
};

export default EventList;
