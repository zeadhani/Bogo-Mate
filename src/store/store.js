import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
const store = configureStore({
  reducer: { SideBar: sideBarSlice.reducer },
});
export default store;
