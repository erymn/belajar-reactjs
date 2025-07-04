import { combineReducers } from "redux";
import userReducer from "./reducers/userReducers";
import resumeReducer from "./reducers/resumeReducers";

const rootReducer = combineReducers({
  user: userReducer,
  resume: resumeReducer,
});

export default rootReducer;
