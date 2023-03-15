import { createSearchParams, useNavigate } from "react-router-dom";
import authFetch from "../../service/interceptors";
import { useQuery } from "react-query";

function useBrands({
  rowsPerPage,
  page,
  sort,
  orderBy,
  search,
  preferencesFilter,
}) {
  const navigate = useNavigate();
  return useQuery(
    ["brands", rowsPerPage, page, sort, orderBy, search, preferencesFilter],
    async () => {
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
      const { data } = await authFetch.get(
        `/brand?limit=${rowsPerPage}&page=${
          page + 1
        }&sort=${sort},${orderBy}&search=${search}&filter=${preferencesFilter}`
      );
      return {
        brands: data.data.data,
        count: data.data.totalCount,
      };
    }
  );
}

export default useBrands;
