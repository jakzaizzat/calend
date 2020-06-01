import React from "react";

const BaseButton = props => {
  const eventHandler = () => {
    props.onClick();
  };
  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        onClick={eventHandler}
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
      >
        {props.children}
      </button>
    </span>
  );
};

export default BaseButton;
