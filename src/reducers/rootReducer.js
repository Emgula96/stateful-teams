import { combineReducers } from "redux";

import backendReducer from "./backend";
import frontendReducer from "./frontend";
import studentReducer from "./student";
import inputReducer from "./inputValue";

const rootReducer = combineReducers({
  students: studentReducer,
  frontend: frontendReducer,
  backend: backendReducer,
  input: inputReducer,
})
export default rootReducer;
