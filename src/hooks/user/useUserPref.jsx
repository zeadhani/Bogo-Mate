import { useReducer, useState } from "react";
import { useEffect } from "react";
import authFetch from "../../service/interceptors";
import axios from "axios";
import arraysHaveSameValues from "../../utils/checkArrays";
const initialState = {
  allPref: [],
  userPref: [],
  userNewPrefData: [],
  dirty: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_DATA_SUCCESS": {
      return {
        ...state,
        allPref: action.payload.allPref,
        userPref: action.payload.userPref,
        userNewPrefData: action.payload.userPref,
      };
    }
    case "SET_NEW_USER_PREF": {
      return {
        ...state,
        userNewPrefData: action.payload.userNewPrefData,
      };
    }
    case "UPDATE_OLD_PREF": {
      return {
        ...state,
        userPref: action.payload.userPref,
        dirty: false,
      };
    }
    case "SET_DIRTY": {
      return {
        ...state,
        dirty: action.payload.dirty,
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};

function useUserPref() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getFilteredData = async () => {
    try {
      const [allPref, userPref] = await Promise.all([
        axios.get(`${process.env.REACT_APP_API_URL}/pref`),
        authFetch.get(`${process.env.REACT_APP_API_URL}/user/pref/getpref`),
      ]);
      dispatch({
        type: "INITIAL_FETCH_DATA_SUCCESS",
        payload: {
          allPref: allPref.data,
          userPref: userPref.data,
        },
      });
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getFilteredData();
  }, []);
  const addItem = (item) => () => {
    const currentIndex = state.userNewPrefData?.indexOf(item);
    const newPrefs = [...state.userNewPrefData];
    if (currentIndex === -1) {
      newPrefs.push(item);
    } else {
      newPrefs.splice(currentIndex, 1);
    }

    if (!arraysHaveSameValues(state.userPref, newPrefs)) {
      dispatch({
        type: "SET_DIRTY",
        payload: {
          dirty: true,
        },
      });
    } else {
      dispatch({
        type: "SET_DIRTY",
        payload: {
          dirty: false,
        },
      });
    }
    dispatch({
      type: "SET_NEW_USER_PREF",
      payload: {
        userNewPrefData: newPrefs,
      },
    });
  };
  const updateOldPref = () => {
    const userPref = state?.userNewPrefData;
    dispatch({
      type: "UPDATE_OLD_PREF",
      payload: {
        userPref,
      },
    });
  };
  return {
    allPref: state.allPref,
    isError,
    isLoading,
    userNewPrefData: state.userNewPrefData,
    dirty: state.dirty,
    addItem,
    updateOldPref,
  };
}

export default useUserPref;
