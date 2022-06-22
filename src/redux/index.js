import { createStore, combineReducers } from "redux";
import loading from "./reducers/loading";
import isLogged from "./reducers/isLogged";
const rootReducer = combineReducers({
  loading,
  isLogged,
});
const store = createStore(rootReducer);
export default store;
