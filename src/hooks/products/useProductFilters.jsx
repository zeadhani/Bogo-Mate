import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

function useProductFilters() {
  const [searchParams] = useSearchParams();
  const [filtered, setFiltered] = useState(
    searchParams.get("filtered") ? searchParams.get("filtered").split(",") : []
  );
  const [filteredStock, setFilteredStock] = useState(
    searchParams.get("stock") ? searchParams.get("stock") : ""
  );
  const [filteredGneder, setFilteredGender] = useState(
    searchParams.get("gender") ? searchParams.get("gender") : ""
  );
  const handleFilterChange = (category) => () => {
    const currentIndex = filtered.indexOf(category);
    const newPreferences = [...filtered];
    if (currentIndex === -1) {
      newPreferences.push(category);
    } else {
      newPreferences.splice(currentIndex, 1);
    }
    setFiltered(newPreferences);
  };
  const handleFilterGenderChange = (item) => {
    setFilteredGender(item);
  };
  const handleFilterStockChange = (item) => () => {
    setFilteredStock(item);
  };

  const resetProductFilters = () => {
    setFiltered([]);
    setFilteredGender("");
    setFilteredStock("");
  };
  return {
    filtered,
    filteredGneder,
    filteredStock,
    handleFilterChange,
    handleFilterGenderChange,
    resetProductFilters,
    handleFilterStockChange,
  };
}

export default useProductFilters;
