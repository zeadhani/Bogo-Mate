import { useEffect, useReducer, useState } from "react";
import authFetch from "../../../service/interceptors";

const initialState = {
  product: null,
  ProductItems: [],
  relatedItems: [],
  reviews: [],
  completedRequests: 0,
  requestsLeft: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT": {
      return {
        ...state,
        product: action.payload.product,
        ProductItems: action.payload.ProductItems,
        relatedItems: action.payload.relatedItems,
        reviews: action.payload.reviews,
        completedRequests: action.payload.completedRequests,
        requestsLeft: action.payload.requestsLeft,
      };
    }
    case "INCREMENT_COMPLETED_REQUESTS":
      return {
        ...state,
        completedRequests: state.completedRequests + 1,
        requestsLeft: state.requestsLeft - 1,
      };
    case "RESET_REQUESTS":
      return {
        ...state,
        completedRequests: action.payload.completedRequests,
        requestsLeft: action.payload.requestsLeft,
      };
    default:
      throw new Error("Unexpected action");
  }
};
function useProductDetailsData({ name }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getProduct = async () => {
    setIsLoading(true);
    try {
      const product = await authFetch.get(`/products/productgetweb/${name}`);
      const completedRequests =
        product.data.product.offers._count.requests %
        product.data.product.offers.total_people_quantity;
      const requestsLeft =
        product.data.product.offers.total_people_quantity - completedRequests;
      dispatch({
        type: "GET_PRODUCT",
        payload: {
          product: product.data.product,
          ProductItems: product.data.product.productItems,
          relatedItems: product.data.relatedItems,
          reviews: product.data.product.Reviews,
          completedRequests,
          requestsLeft,
        },
      });
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  const incrementCompletedRequests = () => {
    if (state?.requestsLeft === 1) {
      const completedRequests = 0;
      const requestsLeft = state?.completedRequests + 1;
      dispatch({
        type: "RESET_REQUESTS",
        payload: {
          completedRequests,
          requestsLeft,
        },
      });
    } else {
      dispatch({ type: "INCREMENT_COMPLETED_REQUESTS" });
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return { state, isError, isLoading, incrementCompletedRequests };
}

export default useProductDetailsData;
