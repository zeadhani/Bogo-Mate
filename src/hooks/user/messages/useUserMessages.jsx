import authFetch from "../../../service/interceptors";
import { useState } from "react";
import { useReducer } from "react";
import { useSelector } from "react-redux";
import usePage from "../../global/newPage";
import useUserMessagesFilter from "./useUserMessagesFilter";
import { useEffect } from "react";
const initialState = {
  messages: [],
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_DATA_SUCCESS": {
      return {
        ...state,
        messages: action.payload.messages,
        count: action.payload.count,
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
function useUserMessages() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = useSelector((state) => state.Auth.user);
  const email = data.replace(/"/g, "");
  const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } =
    usePage();
  const {
    handleRepliedFilterChange,
    repliedArray,
    repliedFilter,
    resetContactUsFilter,
  } = useUserMessagesFilter();
  const getData = async () => {
    try {
      const messagesData = await authFetch.get(
        `/contactus?limit=${rowsPerPage}&page=${
          page + 1
        }&sort=createdAt,desc&replied=${repliedFilter}&email=${email}`
      );

      dispatch({
        type: "INITIAL_FETCH_DATA_SUCCESS",
        payload: {
          messages: messagesData.data.data.data,
          count: messagesData.data.data.totalCount,
        },
      });
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (email) {
      const url = new URL(window.location);
      url.searchParams.set("rowsPerPage", rowsPerPage);
      url.searchParams.set("page", page);
      url.searchParams.set("replied", [repliedFilter]);
      window.history.pushState({}, "", url);
      getData();
    }
  }, [email, rowsPerPage, page, repliedFilter]);
  return {
    messages: state?.messages,
    isLoading,
    isError,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    rowsPerPage,
    count: state?.count,
    getData,
    handleRepliedFilterChange,
    repliedArray,
    resetContactUsFilter,
    repliedFilter
  };
}

export default useUserMessages;
