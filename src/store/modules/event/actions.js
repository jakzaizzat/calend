import { ADD_EVENT, FETCH_EVENTS } from "./action-types";

export function getEvents(response) {
  return {
    type: FETCH_EVENTS,
    response
  };
}

export function addEvent(payload) {
  return {
    type: ADD_EVENT,
    payload
  };
}
