import React from "react";
import BaseButton from "./shared/BaseButton";

const NewEvent = () => {
  const handleChange = event => {
    console.log(event.target.value);
  };
  return (
    <div className="max-w-2xl mx-auto py-16">
      <label className="block mb-3">
        <span className="text-gray-700">Event name</span>
        <input
          className="form-input mt-1 block w-full"
          placeholder="Daily Standup"
          onChange={handleChange}
        />
      </label>

      <label className="block mb-3">
        <span className="text-gray-700">Link</span>
        <input
          className="form-input mt-1 block w-full"
          placeholder="http://google.com"
        />
      </label>

      <BaseButton>Submit</BaseButton>
    </div>
  );
};

export default NewEvent;
