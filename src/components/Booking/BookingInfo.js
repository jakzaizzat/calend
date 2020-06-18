import React from "react";
import Moment from "react-moment";

const BookingInfo = ({ activeTime, event, selectedDate }) => {
  return (
    <>
      <p className="text-gray-600 uppercase text-xs tracking-wide">Aizzat</p>
      <h1 className="text-2xl text-gray-800 font-medium">{event.name}</h1>
      <div className="flex items-center py-2">
        <svg
          className="h-6 w-6 text-indigo-600 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-gray-800">{event.duration} minutes</span>
      </div>
      <div className="flex items-center py-2">
        <svg
          className="h-6 w-6 text-indigo-600 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
            clipRule="evenodd"
          ></path>
        </svg>
        <a href={event.link} className="text-gray-800">
          {event.link}
        </a>
      </div>
      {activeTime ? (
        <div className="flex items-center py-2 text-gray-800">
          <svg
            className="h-6 w-6 text-indigo-600 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
          <Moment format="ddd, MMM DD">{selectedDate}</Moment>
          <span className="mx-1"></span>
          <Moment format="hh:mm A">{activeTime.value}</Moment>
        </div>
      ) : null}
    </>
  );
};

export default BookingInfo;
