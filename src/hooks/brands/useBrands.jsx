import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import authFetch from "../../service/interceptors";

function useBrands(
  rowsPerPage,
  page,
  sort,
  orderBy,
  search,
  preferencesFilter
) {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [brands, setBrands] = useState([]);
  const getBrands = async () => {
    // setLoading(true);
    // try {
    //   const brands = await authFetch.get(
    //     `/brand?limit=${rowsPerPage}&page=${
    //       page + 1
    //     }&sort=${sort},${orderBy}&search=${search}&filter=${preferencesFilter}`
    //   );
    //   setBrands(brands.data.data.data);
    //   setCount(brands.data.data.totalCount);
    //   setError(false);
    // } catch (err) {
    //   setError(true);
    // }
    // setLoading(false);
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
