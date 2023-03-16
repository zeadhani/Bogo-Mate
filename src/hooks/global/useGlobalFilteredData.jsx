import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function useCommonFilters() {
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState(
    searchParams.get("sort") ? searchParams.get("sort") : "createdAt"
  );
  const [search, setSearch] = useState(
    searchParams.get("search") ? searchParams.get("search") : ""
  );
  const [orderBy, setOrderBy] = useState(
    searchParams.get("orderBy") ? searchParams.get("orderBy") : "asc"
  );

  const handleSortChange = (item) => () => {
    switch (item) {
      case "Price : high to low":
        setSort("price");
        setOrderBy("desc");
        break;
      case "Price : low to high":
        setSort("price");
        setOrderBy("asc");
        break;
      case "Latest Items":
        setSort("createdAt");
        setOrderBy("desc");
        break;
      case "Oldest Items":
        setSort("createdAt");
        setOrderBy("asc");
        break;
      default:
        throw new Error("unknown");
    }
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const resetCommonFilters = () => {
    setOrderBy("asc");
    setSort("createdAt");
    setSearch("");
  };
  return {
    handleSortChange,
    handleSearchChange,
    sort,
    search,
    orderBy,
    resetCommonFilters,
  };
}

export default useCommonFilters;
