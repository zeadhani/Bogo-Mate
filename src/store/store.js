import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import AuthSlice from "./AuthSlice";
const store = configureStore({
  reducer: { SideBar: sideBarSlice.reducer ,Auth: AuthSlice.reducer,},
});
export default store;
