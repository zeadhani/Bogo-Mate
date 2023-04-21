import  { useReducer, useState } from "react";
import usePage from "../global/newPage";
import authFetch from "../../service/interceptors";
import { useEffect } from "react";
import { useRef } from "react";
import io from "socket.io-client";
const socket = io(process.env.REACT_APP_API_URL);
const initialState = {
  products: [],
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_DATA_SUCCESS": {
      return {
        ...state,
        products: action.payload.products,
        count: action.payload.count,
      };
    }
    case "UPDATE_PRODUCT": {
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.offersId === action.payload.id) {
            return {
              ...product,
              offers: {
                ...product.offers,
                _count: {
                  ...product.offers._count,
                  requests: action.payload.NewofferNumber,
                },
              },
            };
          }
          return product;
        }),
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
function useUserCurrentRequests({ email }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { page, handleChangePage, rowsPerPage } = usePage();
  const initialRender = useRef(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    try {
      const products = await authFetch.get(
        `/products?limit=${rowsPerPage}&page=${
          page + 1
        }&sort=createdAt,desc&webProducts=true&email=${email}`
      );
      dispatch({
        type: "INITIAL_FETCH_DATA_SUCCESS",
        payload: {
          count: products.data.data.totalCount,
          products: products.data.data.data,
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
      window.history.pushState({}, "", url);
      getData();
    }
  }, [rowsPerPage, page, email]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      socket.on("update_requests", (data) => {
        const render = state.products.some(
          (product) => product.offersId === data.id
        );
        if (render) {
          dispatch({
            type: "UPDATE_PRODUCT",
            payload: {
              id: data.id,
              NewofferNumber: data.NewofferNumber,
            },
          });
        }
      });
    }
  }, [socket, state]);
  return {
    products: state?.products,
    count: state?.count,
    page,
    handleChangePage,
    rowsPerPage,
    isLoading,
    isError,
  };
}

export default useUserCurrentRequests;
