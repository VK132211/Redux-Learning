import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;

/* when user clicks on button dispatch an action which will call the reducer function that updates the state in the slice and subscribed to store using useSelector to get the updated state and update the UI accordingly */
