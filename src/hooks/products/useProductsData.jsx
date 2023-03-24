import { useEffect, useReducer, useRef, useState } from "react";
import authFetch from "../../service/interceptors";
import useCommonFilters from "../global/useGlobalFilteredData";
import useProductFilters from "./useProductFilters";
import usePage from "../global/newPage";
import io from "socket.io-client";
const socket = io(process.env.REACT_APP_API_URL);
const initialState = {
  gender: [],
  products: [],
  categories: [],
  count: 0,
  hasGender: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_DATA_SUCCESS": {
      return {
        ...state,
        gender: action.payload.gender,
        products: action.payload.products,
        categories: action.payload.categories,
        count: action.payload.count,
        hasGender: action.payload.hasGender,
      };
    }
    case "UPDATE_DATA": {
      return {
        ...state,
        products: action.payload.products,
      };
    }
    case "UPDATE_PRODUCT": {
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              offers: {
                ...product.offers,
                _count: {
                  ...product.offers._count,
                  requests: product.offers._count.requests + 1
                }
              }
            };
          }
          return product;
        })
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};
function useProductsData({ filteredBrand }) {
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
    filtered,
    filteredGneder,
    filteredStock,
    handleFilterChange,
    handleFilterGenderChange,
    handleFilterStockChange,
    resetProductFilters,
  } = useProductFilters();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getInitialData = async () => {
    try {
      const filterData = await authFetch.get(
        "/products/filterweb/all/" + filteredBrand
      );
      const products = await authFetch.get(
        `/products?limit=${rowsPerPage}&page=${
          page + 1
        }&sort=${sort},${orderBy}&search=${search}&filter=${filtered}&stock=${filteredStock}&brand=${filteredBrand}&gender=${filteredGneder}`
      );

      dispatch({
        type: "INITIAL_FETCH_DATA_SUCCESS",
        payload: {
          categories: filterData.data.categories,
          gender: filterData.data.gender,
          products: products.data.data.data,
          count: products.data.data.totalCount,
          hasGender: filterData.data.hasGender,
        },
      });
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  const getUpdatedData = async () => {
    const products = await authFetch.get(
      `/products?limit=${rowsPerPage}&page=${
        page + 1
      }&sort=${sort},${orderBy}&search=${search}&filter=${filtered}&stock=${filteredStock}&brand=${filteredBrand}&gender=${filteredGneder}`
    );
    dispatch({
      type: "UPDATE_DATA",
      payload: {
        products: products.data.data.data,
      },
    });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      const url = new URL(window.location);
      url.searchParams.set("rowsPerPage", rowsPerPage);
      url.searchParams.set("page", page);
      url.searchParams.set("sort", sort);
      url.searchParams.set("orderBy", orderBy);
      url.searchParams.set("search", search);
      url.searchParams.set("stock", filteredStock);
      url.searchParams.set("brand", [filteredBrand]);
      url.searchParams.set("filtered", [filtered]);
      url.searchParams.set("gender", filteredGneder);
      window.history.pushState({}, "", url);
      getUpdatedData();
    }
  }, [
    rowsPerPage,
    page,
    sort,
    orderBy,
    search,
    filtered,
    filteredStock,
    filteredGneder,
    filteredBrand,
  ]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      socket.on("update_requests", (data) => {
        const render = state.products.some(
          (product) => product.id === data.message
        );
        if (render) {
          dispatch({
            type: "UPDATE_PRODUCT",
            payload: {
              id: data.message,
            },
          });
          console.log({ products: state });
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
    handleFilterChange,
    handleFilterGenderChange,
    handleFilterStockChange,
    filteredGneder,
    filtered,
    filteredStock,
  };
}

export default useProductsData;
