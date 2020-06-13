import React, { useState } from "react";
import Card from "../shared/Card";
import BaseButton from "../shared/BaseButton";
import Event from "./Event";
import Loading from "../shared/Loading";
import Modal from "../shared/Modal";
import NewEvent from "./NewEvent";

const EventList = ({ isLoading, events }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {isModalOpen ? (
        <Modal title="Add new event" onClose={() => setModalOpen(false)}>
          <NewEvent onClose={() => setModalOpen(false)} />
        </Modal>
      ) : (
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
            {isLoading ? (
              <div className="my-5">
                <Loading color="#333333" />
              </div>
            ) : (
              <ul>
                {events.map((event) => (
                  <Event key={event.id} event={event} />
                ))}
              </ul>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default EventList;
