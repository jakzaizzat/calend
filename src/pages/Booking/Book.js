import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { BookingContext } from "../../context/BookingContext";
import { intervals } from "../../utils/getTimeSlot";

import BookingInfo from "../../components/Booking/BookingInfo";
import BookingTimePicker from "../../components/Booking/BookingTimePicker";
import BookingForm from "../../components/Booking/BookingForm";

const CardContainer = styled.div`
  width: 900px;
  height: 600px;
`;
const Book = () => {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  const {
    selectedDate,
    setSelectedDate,
    activeTime,
    setActiveTime,
    timeSection,
    toggleSection,
  } = useContext(BookingContext);

  const [date, setDate] = useState(null);
  const [intervalOptions, setIntervalOptions] = useState([]);
  const [timeslot, setTimeslot] = useState("");

  const generateTimeslot = (timeFrom, timeTo, duration) => {
    const date = new Date(timeFrom);
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let results = intervals(timeFrom, tomorrow, duration);
    setIntervalOptions(results);
    setTimeslot(results[0].value);
  };

  useEffect(() => {
    setDate(new Date());

    const events = JSON.parse(localStorage.getItem("events")) || [];
    const event = events.find((event) => event.id === id);
    setEvent(event);

    generateTimeslot(event.timeFrom, event.timeTo, event.duration);
  }, [id]);

  useEffect(() => {
    if (selectedDate) {
      generateTimeslot(selectedDate, selectedDate, event.duration);
    }
  }, [selectedDate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-600">
      {!event ? (
        ""
      ) : (
        <CardContainer className="bg-white shadow rounded">
          <div className="flex h-full">
            <div className="w-1/3 p-6 border-r border-gray-200">
              <BookingInfo
                event={event}
                activeTime={activeTime}
                selectedDate={selectedDate}
              />
            </div>
            <div className="w-2/3 p-6">
              {timeSection ? (
                <BookingTimePicker
                  activeTime={activeTime}
                  intervalOptions={intervalOptions}
                  selectedDate={selectedDate}
                />
              ) : (
                <div className="h-full">
                  <button onClick={toggleSection}>
                    <svg
                      className="h-5 w-5 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="h-full flex items-center">
                    <BookingForm
                      id={id}
                      date={date}
                      timeslot={timeslot}
                      reset={() => {
                        toggleSection();
                        setSelectedDate(null);
                        setActiveTime(null);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContainer>
      )}
    </div>
  );
};

export default Book;
