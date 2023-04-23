import { useEffect, useReducer, useRef, useState } from "react";
import usePage from "../global/newPage";
import useCommonFilters from "../global/useGlobalFilteredData";
import useProductFilters from "./useProductFilters";
import authFetch from "../../service/interceptors";
import { io } from "socket.io-client";
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
function useHotOffers() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialRender = useRef(true);
  const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } =
    usePage();
  const {
    sort,
    search,
    orderBy,
    handleSearchChange,
    resetCommonFilters,
    handleSortChange,
  } = useCommonFilters();
  const {
    filteredStock,

    handleFilterStockChange,
    resetProductFilters,
  } = useProductFilters();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const products = await authFetch.get(
        `/products?limit=${rowsPerPage}&page=${
          page + 1
        }&sort=${sort},${orderBy}&search=${search}&stock=${filteredStock}&webProducts=true&hotOffers=true`
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
    url.searchParams.set("sort", sort);
    url.searchParams.set("orderBy", orderBy);
    url.searchParams.set("search", search);
    url.searchParams.set("stock", filteredStock);
    window.history.pushState({}, "", url);
    getData();
  }, [rowsPerPage, page, sort, orderBy, search, filteredStock]);

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
    handleSortChange,
    sort,
    orderBy,
    resetCommonFilters,
    handleSearchChange,
    search,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    resetProductFilters,
    handleFilterStockChange,
    filteredStock,
  };
}

export default useHotOffers;
