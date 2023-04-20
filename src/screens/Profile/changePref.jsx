import React, { useState } from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import { useSelector } from "react-redux";
import useUserPref from "../../hooks/user/useUserPref";
import { Box, Divider, LinearProgress, Paper, Typography } from "@mui/material";
import PrefItem from "../../components/UI/Global/Register/PrefItem";
import FormButton from "../../components/Forms/FormButton";

function ChangePref() {
  const data = useSelector((state) => state.Auth.user);
  const email = data.replace(/"/g, "");
  const [loading, setLoading] = useState(false);
  const [userPref, setUserPref] = useState([]);
  const { pref } = useUserPref({ email });

  const addItem = (item) => () => {
    const currentIndex = userPref?.indexOf(item);
    const newPrefs = [...userPref];
    if (currentIndex === -1) {
      newPrefs.push(item);
    } else {
      newPrefs.splice(currentIndex, 1);
    }
    setUserPref(newPrefs);
  };
  const handleSubmit = () => {};
  return (
    <CustomProfileContainer nav={"/profile/preferences"} title={"Preferences"}>
      {loading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      <Paper elevation={2} sx={{ padding: 4 ,margin:1}}>
        <Typography variant="h4" textTransform={"capitalize"} mb={1}>
          Choose your Preferences
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Box
          my={1}
          gap={1}
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {pref?.map((item) => {
            const checked = userPref.includes(item.name) || pref;
            return (
              <PrefItem
                key={item.name}
                item={item}
                addItem={addItem}
                checked={checked}
              />
            );
          })}
        </Box>
        <Box mt={5}>
          <FormButton action={handleSubmit}>Save</FormButton>
        </Box>
      </Paper>
    </CustomProfileContainer>
  );
}

export default ChangePref;
