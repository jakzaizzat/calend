import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import PropTypes from "prop-types";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
`;

const Card = styled.div`
  width: 500px;
`;

const portal = document.getElementById("portal");

const Modal = ({ title, children, onClose }) => {
  const handleClose = (e) => {
    if (e.target.id === "modal") {
      onClose();
      return;
    }
  };

  return ReactDOM.createPortal(
    <Overlay
      id="modal"
      onClick={handleClose}
      className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center"
    >
      <Card className="bg-white p-2 shadow rounded  w-1/2">
        <div className="flex items-center justify-between p-3 font-semibold text-gray-800">
          <span>{title}</span>
          <button
            onClick={() => {
              onClose();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                className="heroicon-ui"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
              />
            </svg>
          </button>
        </div>
        <div className="body p-3">{children}</div>
      </Card>
    </Overlay>,
    portal
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Modal;
