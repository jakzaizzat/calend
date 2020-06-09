import React, { useEffect, useReducer, useState } from "react";
import EventList from "../components/Event/EventList";
import Modal from "../components/shared/Modal";
import NewEvent from "../components/Event/NewEvent";
import * as eventAPI from "../api/events-api-mock";

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

const Dashboard = () => {
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
    const abortController = new AbortController();
    const signal = abortController.signal;
    eventAPI
      .findAll({ signal })
      .then(result => {
        dispatchEvent({
          type: "SET_EVENTS",
          payload: result
        });
      })
      .catch(() => {
        dispatchEvent({
          type: "EVENTS_FETCH_FAIL"
        });
      });

    return function cleanup() {
      abortController.abort();
    };
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

export default Dashboard;
