import * as types from "./action-types";

export function getEvents(response) {
  return {
    type: types.FETCH_EVENTS,
    response,
  };
}

export function addEvent(payload) {
  return {
    type: types.ADD_EVENT,
    payload,
  };
}

export function getEvent(response) {
  return {
    type: types.GET_EVENT,
    response,
  };
}
