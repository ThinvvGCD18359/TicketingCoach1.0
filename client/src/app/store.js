import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import coachReducer from "../features/Coach/coachSlice"

const rootReducer = {
  user: userReducer,
  coaches: coachReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;