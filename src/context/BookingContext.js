import React, { useState, createContext } from "react";
export const BookingContext = createContext(null);

export const BookingContextProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTime, setActiveTime] = useState(null);
  const [timeSection, setTimeSection] = useState(true);

  const toggleSection = () => {
    setTimeSection(!timeSection);
  };
  return (
    <BookingContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        activeTime,
        setActiveTime,
        timeSection,
        toggleSection,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
