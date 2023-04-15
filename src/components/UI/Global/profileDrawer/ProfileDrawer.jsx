import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../../../store/profileDrawerSlice";
import PorfileDrawerList from "./PorfileDrawerList";

const ProfileDrawer = () => {
  const state = useSelector((state) => state.Profile.open);
  const dispatch = useDispatch();
  const closeDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(profileActions.close());
  };
  const openDrawer = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(profileActions.open());
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={state}
      onClose={closeDrawer}
      onOpen={openDrawer}
      swipeAreaWidth={0}
      transitionDuration={600}
    >
      <Box
        sx={{
          backgroundColor: "#666",
          borderRadius: "8px",
          height: "4px",
          width: "150px",
          mx: "auto",
          mt: 1,
        }}
      />
      <PorfileDrawerList closeDrawer={closeDrawer} />
    </SwipeableDrawer>
  );
};

export default ProfileDrawer;
