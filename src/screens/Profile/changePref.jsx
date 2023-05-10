import React, { useState } from "react";
import CustomProfileContainer from "../../components/UI/Global/profileDrawer/CustomProfileContainer";
import useUserPref from "../../hooks/user/useUserPref";
import { Box, LinearProgress } from "@mui/material";
import PrefItem from "../../components/UI/Global/Register/PrefItem";
import FormButton from "../../components/Forms/FormButton";
import Error from "../../components/UI/Global/Error";
import LoadingData from "../../components/UI/Global/LoadingData";
import { toast } from "react-toastify";
import authFetch from "../../service/interceptors";

function ChangePref() {
  const [loading, setLoading] = useState(false);
  const {
    allPref,
    isError,
    isLoading,
    userNewPrefData,
    dirty,
    addItem,
    updateOldPref,
  } = useUserPref();

  const handleSubmit = async () => {
    if (!dirty) {
      return;
    }
    setLoading(true);
    try {
      await authFetch.patch(
        `${process.env.REACT_APP_API_URL}/user/editprefweb/pref`,
        {
          preferences: userNewPrefData,
        }
      );
      updateOldPref();
      toast.success("Updated");
    } catch (error) {
      toast.error("Failed");
    } finally {
      setLoading(false);
    }
  };
  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return <LoadingData />;
  }
  return (
    <CustomProfileContainer nav={"/profile/preferences"} title={"Preferences"}>
      {loading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}

      <Box
        my={4}
        gap={1}
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {allPref?.map((item) => {
          const checked = userNewPrefData?.includes(item.name);
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
        <FormButton disabled={!dirty} action={handleSubmit}>
          Save
        </FormButton>
      </Box>
    </CustomProfileContainer>
  );
}

export default ChangePref;
