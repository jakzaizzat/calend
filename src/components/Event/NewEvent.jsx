import React, { useState, useEffect } from "react";
import BaseButton from "../shared/BaseButton";
import Input from "../shared/Input";

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
      <Input
        id="name"
        label="Event name"
        value={event.name}
        onChange={handleInputChange}
        placeholder="Daily Standup"
      />

      <Input
        id="link"
        label="Link"
        value={event.link}
        onChange={handleInputChange}
        placeholder="http://google.com"
      />
      <BaseButton onClick={handleButton}>Submit</BaseButton>
    </div>
  );
};

export default NewEvent;
