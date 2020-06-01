import React, { useState, useEffect } from "react";
import BaseButton from "../shared/BaseButton";

const NewEvent = () => {
  const handleInputChange = e => {
    e.persist();
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const handleButton = () => {
    console.log(event);
  };
  const useSemiPersistenceState = (key, initialState) => {
    const [event, setEvent] = useState(
      JSON.parse(localStorage.getItem(key)) || initialState
    );

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(event));
    }, [event]);

    return [event, setEvent];
  };

  const [event, setEvent] = useSemiPersistenceState("event", {
    name: "",
    link: ""
  });

  return (
    <div className="max-w-2xl mx-auto py-16">
      <label className="block mb-3">
        <span className="text-gray-700">Event name</span>
        <input
          className="form-input mt-1 block w-full"
          placeholder="Daily Standup"
          name="name"
          value={event.name}
          onChange={handleInputChange}
        />
      </label>

      <label className="block mb-3">
        <span className="text-gray-700">Link</span>
        <input
          className="form-input mt-1 block w-full"
          placeholder="http://google.com"
          name="link"
          value={event.link}
          onChange={handleInputChange}
        />
      </label>

      <BaseButton onClick={handleButton}>Submit</BaseButton>
    </div>
  );
};

export default NewEvent;
