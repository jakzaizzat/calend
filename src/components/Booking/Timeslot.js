import React, { useState } from "react";
import Moment from "react-moment";
import styled from "styled-components";

const Timeslot = ({ activeDate, time, ...props }) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  const ButtonAnimate = styled.button`
    -webkit-transition: 1s ease-in-out;
    transition: width 0.35s ease-in-out;
  `;
  return (
    <>
      <div className="mb-2 flex items-center">
        <ButtonAnimate
          onClick={handleActive}
          className={` ${
            active ? "mr-2 w-1/2" : "w-full"
          } tracking-wide flex items-center justify-center items-center px-4 py-3 border border-indigo-600 text-xs leading-4 font-medium rounded text-indigo-600 bg-white hover:bg-indigo-500 hover:text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150`}
        >
          <Moment format="hh:mm A">{time.value}</Moment>
        </ButtonAnimate>
        {active ? (
          <button
            onClick={() => {
              props.setActiveTime(time);
            }}
            className="w-1/2 flex items-center justify-center  items-center px-4 py-3 border border-transparent text-sm leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            Confirm
          </button>
        ) : null}
      </div>
    </>
  );
};

export default Timeslot;
