import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";

const rootReducer = combineReducers({
  todos,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store;
