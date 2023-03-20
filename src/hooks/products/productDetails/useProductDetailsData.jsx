import { useEffect, useReducer, useState } from "react";
import authFetch from "../../../service/interceptors";

const initialState = {
  product: null,
  ProductItems: [],
  relatedItems: [],
  reviews:[]
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
      };
    }
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
      dispatch({
        type: "GET_PRODUCT",
        payload: {
          product: product.data.product,
          ProductItems: product.data.product.productItems,
          relatedItems: product.data.relatedItems,
          reviews: product.data.product.Reviews,
        },
      });
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return { state, isError, isLoading };
}

export default useProductDetailsData;
