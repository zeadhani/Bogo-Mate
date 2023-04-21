import { useEffect, useReducer, useState } from "react";
import authFetch from "../../service/interceptors";

const initialState = {
  order: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_DATA_SUCCESS": {
      return {
        ...state,
        order: action.payload.order,
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
function useSingleOrder({ id }) {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    try {
      const orderData = await authFetch.get(`/orders/singleOrderItem/${id}`);
      dispatch({
        type: "INITIAL_FETCH_DATA_SUCCESS",
        payload: {
          order: orderData.data,
        },
      });
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);
  return {
    order: state?.order,
    isLoading,
    isError,
  };
}

export default useSingleOrder;
