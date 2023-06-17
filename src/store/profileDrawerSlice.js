import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const profileSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    open(state) {
      state.open = true;
    },
    close(state) {
      state.open = false;
    },
  },
});
export default profileSlice; 
export const profileActions = profileSlice.actions;
