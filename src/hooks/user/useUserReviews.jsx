import { useEffect, useReducer, useState } from "react";
import authFetch from "../../service/interceptors";
import usePage from "../global/newPage";
const initialState = {
  reviews: [],
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_DATA_SUCCESS": {
      return {
        ...state,
        reviews: action.payload.reviews,
        count: action.payload.count,
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
function useUserReviews() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } =
    usePage();
  const getData = async () => {
    try {
      const reviewsData = await authFetch.get(
        `/review?limit=${rowsPerPage}&page=${
          page + 1
        }&sort=createdAt,desc&email=true`
      );

      dispatch({
        type: "INITIAL_FETCH_DATA_SUCCESS",
        payload: {
          reviews: reviewsData.data.data.data,
          count: reviewsData.data.data.totalCount,
        },
      });
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set("rowsPerPage", rowsPerPage);
    url.searchParams.set("page", page);
    window.history.pushState({}, "", url);
    getData();
  }, [rowsPerPage, page]);
  return {
    reviews: state?.reviews,
    isLoading,
    isError,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    rowsPerPage,
    count: state?.count,
    getData,
  };
}

export default useUserReviews;
