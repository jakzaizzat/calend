import * as types from "./action-types";
let initialState = {
  events: [],
  event: null,
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EVENTS:
      return {
        ...state,
        events: action.response,
      };
    case types.ADD_EVENT:
      return state.concat(action.payload);
    case types.GET_EVENT:
      return {
        ...state,
        event: action.response,
      };
    default:
      return state;
  }
};

export default eventReducer;
