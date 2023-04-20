import { useState } from "react";
import { useEffect } from "react";
import authFetch from "../../service/interceptors";

function useUserPref({ email }) {
  const [pref, setPref] = useState();
  const getFilteredData = async () => {
    const prefData = await authFetch.get(
      `${process.env.REACT_APP_API_URL}/user/getpref/${email}`
    );
    setPref(prefData.data);
  };
  useEffect(() => {
    if (email) {
      getFilteredData();
    }
  }, [email]);
  return { pref };
}

export default useUserPref;
