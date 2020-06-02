import React, { useState, useEffect } from "react";
import BaseButton from "../shared/BaseButton";
import Input from "../shared/Input";
import InputSelect from "../shared/InputSelect";

const NewEvent = () => {
  const handleInputChange = e => {
    e.persist();
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const handleButton = () => {
    // TODO: Integrate with REST
    console.log(event);
  };
  const useSemiPersistenceState = (key, initialState) => {
    const [event, setEvent] = useState(
      JSON.parse(localStorage.getItem(key)) || initialState
    );

    useEffect(
      key => {
        localStorage.setItem(key, JSON.stringify(event));
      },
      [event]
    );

    return [event, setEvent];
  };
  const eventTypes = [
    {
      id: 1,
      value: "One to One"
    },
    {
      id: 2,
      value: "Many to many"
    }
  ];
  const [event, setEvent] = useSemiPersistenceState("event", {
    name: "",
    link: "",
    type: ""
  });

  return (
    <div>
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

      <InputSelect
        label="Event Type"
        id="type"
        value={event.type}
        options={eventTypes}
        onChange={handleInputChange}
      />

      <BaseButton onClick={handleButton}>Submit</BaseButton>
    </div>
  );
};

export default NewEvent;
