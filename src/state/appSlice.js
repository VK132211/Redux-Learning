import { createSlice } from "@reduxjs/toolkit";
import { updateTheme } from "../utils/handlers";
const appSlice = createSlice({
  name: "app",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      updateTheme(state.isDarkMode);
    },
  },
});

export const { toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;
