import React from "react";
import Loading from "./Loading";

const BaseButton = props => {
  const eventHandler = () => {
    props.onClick();
  };
  return (
    <span className="block rounded-md shadow-sm">
      <button
        onClick={eventHandler}
        type="button"
        className=" w-full flex items-center justify-center  items-center px-4 py-3 border border-transparent text-sm leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
      >
        {props.isLoading ? (
          <div className="mr-3">
            <Loading />
          </div>
        ) : (
          props.children
        )}
      </button>
    </span>
  );
};

export default BaseButton;
