import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react";
import authFetch from "../../service/interceptors";
const initialState = {
  totalOrders: 0,
  moneySpent: 0,
  currentRequests: 0,
  totalReviews: 0,
  favoriteBrand: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_DATA_SUCCESS": {
      return {
        ...state,
        totalOrders: action.payload.totalOrders,
        moneySpent: action.payload.moneySpent,
        currentRequests: action.payload.currentRequests,
        totalReviews: action.payload.totalReviews,
        favoriteBrand: action.payload.favoriteBrand,
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
function useDahboardData() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    try {
      const dashboardData = await authFetch.get(
        `${process.env.REACT_APP_API_URL}/user/dashboard`
      );

      dispatch({
        type: "INITIAL_FETCH_DATA_SUCCESS",
        payload: {
          totalOrders: dashboardData.data.totalOrders,
          moneySpent: dashboardData.data.moneySpent,
          currentRequests: dashboardData.data.currentRequests,
          totalReviews: dashboardData.data.totalReviews,
          favoriteBrand: dashboardData.data.favoriteBrand,
        },
      });
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    totalOrders: state?.totalOrders,
    moneySpent: state?.moneySpent,
    currentRequests: state?.currentRequests,
    totalReviews: state?.totalReviews,
    favoriteBrand: state?.favoriteBrand,
    isError,
    isLoading,
  };
}

export default useDahboardData;
