import React from "react";
import { BookingContextProvider } from "./BookingContext";
import { UserContextProvider } from "./UserContext";

const ContextProvider = ({ children }) => {
  return (
    <UserContextProvider>
      <BookingContextProvider>{children}</BookingContextProvider>
    </UserContextProvider>
  );
};

export default ContextProvider;
