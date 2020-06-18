import React from "react";
import Calendar from "./Calendar";
import Moment from "react-moment";
import Timeslot from "./Timeslot";
import styled from "styled-components";

const TimeScrollContainer = styled.div`
  height: 500px;
  overflow-y: scroll;
`;

const BookingTimePicker = ({
  activeTime,
  intervalOptions,
  selectedDate,
  ...props
}) => {
  return (
    <>
      <h3 className="font-medium text-gray-800 mb-3">Select a Date & Time</h3>
      <div className="flex">
        <div className={`${selectedDate ? "w-2/3" : "w-full"}`}>
          <Calendar
            value={selectedDate}
            onChange={(date) => {
              props.handleDateChanges(date);
            }}
          />
        </div>
        {selectedDate ? (
          <TimeScrollContainer className="w-1/3 px-3">
            <p className="font-medium text-gray-800 mb-3">
              <Moment format="ddd, MMM DD">{selectedDate}</Moment>
            </p>

            {intervalOptions.map((time) => (
              <Timeslot
                key={time.value}
                time={time}
                activeDate={activeTime}
                setActiveTime={(timeslot) => {
                  props.handleTimeslotChange(timeslot);
                }}
              />
            ))}
          </TimeScrollContainer>
        ) : null}
      </div>
    </>
  );
};

export default BookingTimePicker;
