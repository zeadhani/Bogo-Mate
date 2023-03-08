import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const sideBarSlice = createSlice({
  name: "Auth",
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
export default sideBarSlice;
export const sideBarActions = sideBarSlice.actions;
