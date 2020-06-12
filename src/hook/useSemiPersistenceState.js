import { useState, useEffect } from "react";
export const useSemiPersistenceState = (key, initialState) => {
  const [event, setEvent] = useState(
    JSON.parse(localStorage.getItem(key)) || initialState
  );

  useEffect(
    (key) => {
      localStorage.setItem(key, JSON.stringify(event));
    },
    [event]
  );

  return [event, setEvent];
};
