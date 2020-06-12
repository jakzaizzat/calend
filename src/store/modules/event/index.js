import * as types from "./action-types";
let initialState = [];

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EVENTS:
      return state.concat(action.response);
    case types.ADD_EVENT:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default eventReducer;
