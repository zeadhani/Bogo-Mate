import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import AuthSlice from "./AuthSlice";
import profileSlice from "./profileDrawerSlice";
const store = configureStore({
  reducer: {
    SideBar: sideBarSlice.reducer,
    Auth: AuthSlice.reducer,
    Profile: profileSlice.reducer,
  },
});
export default store;
