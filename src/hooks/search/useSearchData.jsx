import { useEffect, useReducer, useRef, useState } from "react";
import authFetch from "../../service/interceptors";
import usePage from "../global/newPage";
import useCommonFilters from "../global/useGlobalFilteredData";
import io from "socket.io-client";
const socket = io(process.env.REACT_APP_API_URL);
const initialState = {
  products: [],
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA": {
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
function useSearchData() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } =
    usePage();
  const { search } = useCommonFilters();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const initialRender = useRef(true);
  const getUpdatedData = async () => {
    try {
      const products = await authFetch.get(
        `/products?limit=${rowsPerPage}&page=${page + 1}&search=${search}&webProducts=true`
      );
      dispatch({
        type: "UPDATE_DATA",
        payload: {
          products: products.data.data.data,
          count: products.data.data.totalCount,
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
    url.searchParams.set("search", search);
    window.history.pushState({}, "", url);
    getUpdatedData();
  }, [rowsPerPage, page, search]);
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
    state,
    isError,
    isLoading,
    search,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  };
}

export default useSearchData;
