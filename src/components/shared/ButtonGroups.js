import React from "react";

const ButtonGroups = ({ active, durations, ...props }) => {
  return (
    <span className="relative z-0 inline-flex shadow-sm">
      {durations.map((duration, i) => (
        <button
          key={duration}
          type="button"
          onClick={() => {
            props.handleChanges(duration);
          }}
          className={` ${
            active === duration
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700"
          } relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium  hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}
        >
          {duration} minutes
        </button>
      ))}
    </span>
  );
};

export default ButtonGroups;
