import { useEffect, useState } from "react";
import axios from "axios";

function usePreferences() {
  const [pref, setPref] = useState();
  // console.log("from pref")
  const getFilteredData = async () => {
    // console.log("from pref request");
    const filterData = await axios.get(`${process.env.REACT_APP_API_URL}/pref`);
    setPref(filterData.data);
  };
  useEffect(() => {
    getFilteredData();
  }, []);
  return { pref };
}

export default usePreferences;
