import React, { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import Calendar from "./Calendar";
import Moment from "react-moment";
import Timeslot from "./Timeslot";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  const { setSelectedDate } = useContext(BookingContext);
  return (
    <>
      <h3 className="font-medium text-gray-800 mb-3">Select a Date & Time</h3>
      <div className="flex">
        <div className={`${selectedDate ? "w-2/3" : "w-full"}`}>
          <Calendar
            value={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
            }}
          />
        </div>
        {selectedDate ? (
          <TimeScrollContainer className="w-1/3 px-3">
            <p className="font-medium text-gray-800 mb-3">
              <Moment format="ddd, MMM DD">{selectedDate}</Moment>
            </p>

            {intervalOptions.map((time) => (
              <Timeslot key={time.value} time={time} />
            ))}
          </TimeScrollContainer>
        ) : null}
      </div>
    </>
  );
};

BookingTimePicker.propTypes = {
  intervalOptions: PropTypes.array.isRequired,
};

export default BookingTimePicker;
