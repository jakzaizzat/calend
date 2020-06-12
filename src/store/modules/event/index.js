let initialState = [];

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          name: "test"
        }
      ];
    default:
      return state;
  }
};

export default eventReducer;
