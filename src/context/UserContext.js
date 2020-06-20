import React, { createContext, useState } from "react";
export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};
