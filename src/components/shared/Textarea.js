import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ id, label, value, onChange }) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-5 mb-2 text-gray-700"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        cols="3"
        rows="5"
      />
    </div>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Textarea;
