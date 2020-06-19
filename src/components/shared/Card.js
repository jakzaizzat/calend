import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, children, action }) => {
  return (
    <div>
      <div className="bg-white rounded-t-md px-4 py-5 border-b border-gray-200 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
          <div className="ml-4 mt-2">
            <h3
              className="text-lg leading-6 font-medium text-gray-900"
              data-testid="title"
            >
              {title}
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">{action}</div>
        </div>
      </div>
      <div
        className="bg-white  overflow-hidden sm:rounded-b-md"
        data-testid="body"
      >
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
