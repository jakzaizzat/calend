import React from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../assets/calendar.css";

const Calendar = ({ value, ...props }) => {
  return (
    <ReactCalendar
      minDate={new Date()}
      onChange={(date) => {
        props.onChange(date);
      }}
      value={value}
    />
  );
};

export default Calendar;
