import { Box, Divider, LinearProgress, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import FormButton from "../../../Forms/FormButton";
import usePreferences from "../../../../hooks/brands/usePreferences";
import PrefItem from "./PrefItem";
import { toast } from "react-toastify";
import axios from "axios";

function RegisterNewPref({ handleNext, newUser }) {
  const [loading, setLoading] = useState(false);
  const [userPref, setUserPref] = useState([]);
  const { pref } = usePreferences();

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
  const handleSubmitPref = async () => {
    if (userPref.length === 0) {
      toast.error("please choose at least one preference");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/addpref/${newUser}`,
        { preferences: userPref }
      );
      if (res.statusText !== "OK") return;
      toast.success("Great one step left!");
      handleNext();
    } catch (err) {
      toast.error(err.response.data.error);
    }
    setLoading(false);
  };
  return (
    <Box sx={{ width: { xs: "90%", md: "50%" } }}>
      {loading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      <Paper elevation={4} sx={{ padding: 4 }}>
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
            const checked = userPref.includes(item.name);
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
          <FormButton action={handleSubmitPref}>Next</FormButton>
        </Box>
      </Paper>
    </Box>
  );
}

export default RegisterNewPref;
