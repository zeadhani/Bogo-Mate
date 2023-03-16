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
  const navigate = useNavigate();
  // console.log("from brands")
  // return useQuery(
  //   ["brands", rowsPerPage, page, sort, orderBy, search, preferencesFilter],
  //   async () => {
  //     console.log("from brands request")
  //     navigate({
  //       search: `?${createSearchParams({
  //         rowsPerPage,
  //         page,
  //         sort,
  //         orderBy,
  //         search,
  //         preferences: [preferencesFilter],
  //       })}`,
  //     });
  //     const { data } = await authFetch.get(
  //       `/brand?limit=${rowsPerPage}&page=${
  //         page + 1
  //       }&sort=${sort},${orderBy}&search=${search}&filter=${preferencesFilter}`
  //     );
  //     return {
  //       brands: data.data.data,
  //       count: data.data.totalCount,
  //     };
  //   },
  // );
  const [count, setCount] = useState(0);
  const [brands, setBrands] = useState([]);
  const getBrands = async () => {
    console.log("from brands request");
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
    navigate({
      search: `?${createSearchParams({
        rowsPerPage,
        page,
        sort,
        orderBy,
        search,
        preferences: [preferencesFilter],
      })}`,
    });
    getBrands();
  }, [rowsPerPage, page, sort, orderBy, search, preferencesFilter]);
  return { brands, count, getBrands };
}

export default useBrands;
