import { createStore } from "redux";
import { combineReducers } from "redux";
import todoReducer from "./moduels/todo";

const rootReducer = combineReducers({todoReducer});
const store = createStore(rootReducer);

export default store;