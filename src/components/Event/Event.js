import React from "react";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <Link to={"/event/" + event.id}>
      <span className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
              {event.title}
            </div>
            <div className="ml-2 flex-shrink-0 flex">
              <span
                className={
                  "px-2 inline-flex text-xs leading-5 font-semibold rounded-full " +
                  (event.active
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800")
                }
              >
                {event.active ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <div className="mr-6 flex items-center text-sm leading-5 text-gray-500">
                <svg
                  className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#beccda"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {event.duration} minutes
              </div>
            </div>
          </div>
        </div>
      </span>
    </Link>
  );
};

export default Event;
