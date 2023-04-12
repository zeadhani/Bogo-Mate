import { createSearchParams, useNavigate } from "react-router-dom";
import authFetch from "../../service/interceptors";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

function useBrands({
  rowsPerPage,
  page,
  sort,
  orderBy,
  search,
  preferencesFilter,
}) {
  const [count, setCount] = useState(0);
  const [brands, setBrands] = useState([]);
  const getBrands = async () => {
    try {
      const brands = await authFetch.get(
        `/brand?limit=${rowsPerPage}&page=${
          page + 1
        }&sort=${sort},${orderBy}&search=${search}&filter=${preferencesFilter}`
      );
      setBrands(brands.data.data.data);
      setCount(brands.data.data.totalCount);
    } catch (err) {}
  };
  useEffect(() => {
    const url = new URL(window.location);
    url.searchParams.set("rowsPerPage", rowsPerPage);
    url.searchParams.set("page", page);
    url.searchParams.set("sort", sort);
    url.searchParams.set("orderBy", orderBy);
    url.searchParams.set("search", search);
    url.searchParams.set("preferences", [preferencesFilter]);
    window.history.pushState({}, "", url);
    getBrands();
  }, [rowsPerPage, page, sort, orderBy, search, preferencesFilter]);
  return { brands, count, getBrands };
}

export default useBrands;
