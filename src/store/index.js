import { createStore } from "redux";
import reducers from "./modules/event/reducers";
const store = createStore(reducers, {
  currentUser: null,
  events: []
});

export default store;
