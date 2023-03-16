import {
  Box,
  Grid,
  Pagination,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, {
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Brands from "../../components/UI/brands/brands";
import FilterList from "../../components/UI/brands/Fliter";
import CustomContainer from "../../components/UI/Global/CustomContainer";
import HeaderImage from "../../components/UI/Global/Header";
import usePage from "../../hooks/global/newPage";
import useCommonFilters from "../../hooks/global/useGlobalFilteredData";
import usePreferences from "../../hooks/brands/usePreferences";
import useBrands from "../../hooks/brands/useBrands";
import useBrandFilters from "../../hooks/brands/useBrandFilter";
import LoadingData from "../../components/UI/Global/LoadingData";
import Error from "../../components/UI/Global/Error";
import ShopContainer from "./shopContainer";
import { createSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import authFetch from "../../service/interceptors";

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
function ShopPage() {
  const theme = useTheme();
  console.log("from index");
  const navigate = useNavigate();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialRender = useRef(true);
  const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } =
    usePage();
  const {
    sort,
    search,
    orderBy,
    handleOrderByChange,
    handleSearchChange,
    resetCommonFilters,
    handleSortChange,
  } = useCommonFilters();
  const { handleFilterPrefChange, preferencesFilter, resetBrandFilters } =
    useBrandFilters();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("first");
    const getInitialData = async () => {
      try {
        const filterData = await axios.get(
          `${process.env.REACT_APP_API_URL}/pref`
        );
        const brands = await authFetch.get(
          `/brand?limit=${rowsPerPage}&page=${
            page + 1
          }&sort=${sort},${orderBy}&search=${search}&filter=${preferencesFilter}`
        );
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
    getInitialData();
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      console.log("second");
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
      const url = new URL(window.location);
      url.searchParams.set("rowsPerPage", rowsPerPage);
      url.searchParams.set("page", page);
      url.searchParams.set("sort", sort);
      url.searchParams.set("orderBy", orderBy);
      url.searchParams.set("search", search);
      url.searchParams.set("preferences", [preferencesFilter]);
      window.history.pushState({}, "", url);
      // navigate({
      //   search: `?${createSearchParams({
      //     rowsPerPage,
      //     page,
      //     sort,
      //     orderBy,
      //     search,
      //     preferences: [preferencesFilter],
      //   })}`,
      // });
      getUpdatedData();
    }
  }, [rowsPerPage, page, sort, orderBy, search, preferencesFilter]);

  const BrandsContainer = ({ brands }) => {
    return (
      <>
        <Grid item xs={12} md={9}>
          <Brands matches={matches} brands={brands} />
          <Box display={"flex"} justifyContent={"center"}>
            <Pagination
              size={matches ? "small" : "medium"}
              count={10}
              sx={{ mt: 5 }}
              color="primary"
            />
          </Box>
        </Grid>
      </>
    );
  };

  if (isError) {
    return <Error />;
  }
  if (isLoading && !isError) {
    return (
      <ShopContainer>
        <Grid item xs={12}>
          <LoadingData />
        </Grid>
      </ShopContainer>
    );
  }
  return (
    <ShopContainer
      handleFilterPrefChange={handleFilterPrefChange}
      matches={matches}
      pref={state?.pref}
      preferencesFilter={preferencesFilter}
      resetBrandFilters={resetBrandFilters}
    >
      {state?.count === 0 ? (
        <Typography textAlign={"center"}>No Items Available</Typography>
      ) : (
        <BrandsContainer brands={state?.brands} />
      )}
    </ShopContainer>
  );
}
export default ShopPage;
// const { page, handleChangePage, handleChangeRowsPerPage, rowsPerPage } =
//   usePage();
// const {
//   sort,
//   search,
//   orderBy,
//   handleOrderByChange,
//   handleSearchChange,
//   resetCommonFilters,
//   handleSortChange,
// } = useCommonFilters();
// const { handleFilterPrefChange, preferencesFilter, resetBrandFilters } =
//   useBrandFilters();

// const { pref } = usePreferences();
// const { brands } = useBrands({
//   page,
//   orderBy,
//   preferencesFilter,
//   rowsPerPage,
//   search,
//   sort,
// });
