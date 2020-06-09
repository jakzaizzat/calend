import React, { useState, useEffect } from "react";
import BaseButton from "../shared/BaseButton";
import Input from "../shared/Input";
import InputSelect from "../shared/InputSelect";
import DatePicker from "react-pikaday-datepicker";

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
        label="Meeting link"
        value={event.link}
        onChange={handleInputChange}
        placeholder="http://google.com"
      />

      <div className="mb-3">
        <label className="block text-sm font-medium leading-5 mb-2 text-gray-700">
          Instructions
        </label>
        <textarea
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          cols="3"
          rows="5"
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium leading-5 mb-2 text-gray-700">
          Event duration
        </label>
        <span className="relative z-0 inline-flex shadow-sm">
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            60 minutes
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            30 minutes
          </button>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
          >
            15 minutes
          </button>
        </span>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium leading-5 mb-2 text-gray-700">
          Date interval
        </label>
        <div className="flex items-center -mx-2">
          <div className="w-1/2 px-2">
          <DatePicker
              placeholder="From"
              format="YYYY/MM/DD"
              className="form-input w-full text-sm"
          />
          </div>

          <div className="w-1/2 px-2">
            <DatePicker
                placeholder="End"
                format="YYYY/MM/DD"
                className="form-input w-full text-sm"
            />
          </div>
        </div>

      </div>

      <div>
        <label className="block text-sm font-medium leading-5 mb-2 text-gray-700">
          Time interval
        </label>
        <div className="flex items-center -mx-2">
          <div className="w-1/2 px-2">
            <Input type="time"/>
          </div>

          <div className="w-1/2 px-2">
            <Input type="time"/>
          </div>
        </div>

      </div>

      <div className="mt-8">
        <BaseButton onClick={handleButton}>Submit</BaseButton>
      </div>
    </div>
  );
};

export default NewEvent;
