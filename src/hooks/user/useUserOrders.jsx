import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import authFetch from "../../service/interceptors";
import usePage from "../global/newPage";
const initialState = {
  orders: [],
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_DATA_SUCCESS": {
      return {
        ...state,
        orders: action.payload.orders,
        count: action.payload.count,
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
function useUserOrders() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } =
    usePage();
  const getData = async () => {
    try {
      const ordersData = await authFetch.get(
        `/orders/userorders/web?limit=${rowsPerPage}&page=${
          page + 1
        }&sort=createdAt,desc&email=true`
      );

      dispatch({
        type: "INITIAL_FETCH_DATA_SUCCESS",
        payload: {
          orders: ordersData.data.data.data,
          count: ordersData.data.data.totalCount,
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
    orders: state?.orders,
    isLoading,
    isError,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    rowsPerPage,
    count: state?.count,
  };
}

export default useUserOrders;
