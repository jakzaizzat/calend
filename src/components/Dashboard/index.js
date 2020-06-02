import React, { useEffect, useReducer, useState } from "react";
import EventList from "../Event/EventList";
import Modal from "../shared/Modal";
import NewEvent from "../Event/NewEvent";

const initialEvents = [
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

const eventReducer = (state, action) => {
  if (action.type === "SET_EVENTS") {
    return action.payload;
  } else {
    throw new Error();
  }
};

const Index = () => {
  const getAsyncEvent = () => {
    return new Promise(resolve =>
      setTimeout(() => resolve({ data: { events: initialEvents } }), 2000)
    );
  };
  const [events, dispatchEvent] = useReducer(eventReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAsyncEvent()
      .then(result => {
        dispatchEvent({
          type: "SET_EVENTS",
          payload: result.data.events
        });
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {showModal ? (
        <Modal title="Add new event" onClose={handleToggle}>
          <NewEvent />
        </Modal>
      ) : null}
      {isError && <p>Something when wrong</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <EventList events={events} onCreateModal={handleToggle} />
      )}
    </div>
  );
};

export default Index;
