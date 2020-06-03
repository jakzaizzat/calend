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
  switch (action.type) {
    case "EVENTS_FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "SET_EVENTS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "EVENTS_FETCH_FAIL":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
};

const Index = () => {
  const getAsyncEvent = () => {
    return new Promise(resolve =>
      setTimeout(() => resolve({ data: { events: initialEvents } }), 2000)
    );
  };
  const [events, dispatchEvent] = useReducer(eventReducer, {
    data: [],
    isLoading: false,
    isError: false
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatchEvent({
      type: "EVENTS_FETCH_INIT"
    });
    getAsyncEvent()
      .then(result => {
        dispatchEvent({
          type: "SET_EVENTS",
          payload: result.data.events
        });
      })
      .catch(() => {
        dispatchEvent({
          type: "EVENTS_FETCH_FAIL"
        });
      });
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
      {events.isError ? (
        <p>Something when wrong</p>
      ) : (
        <EventList
          events={events.data}
          isLoading={events.isLoading}
          onCreateModal={handleToggle}
        />
      )}
    </div>
  );
};

export default Index;
