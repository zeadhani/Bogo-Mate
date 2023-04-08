import { useEffect, useReducer, useRef, useState } from "react";
import authFetch from "../../service/interceptors";
import useBrandFilters from "./useBrandFilter";
import useCommonFilters from "../global/useGlobalFilteredData";
import usePage from "../global/newPage";
import axios from "axios";

const initialState = {
  pref: [],
  brands: [],
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_FETCH_DATA_SUCCESS": {
      return {
        ...state,
        pref: action.payload.pref,
        brands: action.payload.brands,
        count: action.payload.count,
      };
    }
    case "UPDATE_DATA": {
      return {
        ...state,
        brands: action.payload.brands,
      };
    }
    default:
      throw new Error("Unexpected action");
  }
};

function useBrandsData() {
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
  const { handleFilterPrefChange, preferencesFilter, resetBrandFilters } =
    useBrandFilters();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getInitialData = async () => {
    try {
      const [filterData, brands] = await Promise.all([
        axios.get(`${process.env.REACT_APP_API_URL}/pref`),
        authFetch.get(`/brand?limit=${rowsPerPage}&page=${page + 1}&sort=${sort},${orderBy}&search=${search}&filter=${preferencesFilter}`),
      ]);
      dispatch({
        type: "INITIAL_FETCH_DATA_SUCCESS",
        payload: {
          pref: filterData.data,
          brands: brands.data.data.data,
          count: brands.data.data.totalCount,
        },
      });
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  
  const getUpdatedData = async () => {
    const brands = await authFetch.get(
      `/brand?limit=${rowsPerPage}&page=${
        page + 1
      }&sort=${sort},${orderBy}&search=${search}&filter=${preferencesFilter}`
    );
    dispatch({
      type: "UPDATE_DATA",
      payload: {
        brands: brands.data.data.data,
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
      url.searchParams.set("preferences", [preferencesFilter]);
      window.history.pushState({}, "", url);
      getUpdatedData();
    }
  }, [rowsPerPage, page, sort, orderBy, search, preferencesFilter]);

  return {
    state,
    isError,
    isLoading,
    handleFilterPrefChange,
    preferencesFilter,
    resetBrandFilters,
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
  };
}

export default useBrandsData;
