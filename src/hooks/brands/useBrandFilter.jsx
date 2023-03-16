import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function useBrandFilters() {
  const [searchParams] = useSearchParams();
  const [preferencesFilter, setPrefFilter] = useState(
    searchParams.get("preferences")
      ? searchParams.get("preferences").split(",")
      : []
  );

  const handleFilterPrefChange = (preference) => () => {
    const currentIndex = preferencesFilter.indexOf(preference);
    const newPreferences = [...preferencesFilter];
    if (currentIndex === -1) {
      newPreferences.push(preference);
    } else {
      newPreferences.splice(currentIndex, 1);
    }
    setPrefFilter(newPreferences);
  };
  const resetBrandFilters = () => {
    setPrefFilter([]);
  };
  return { preferencesFilter, handleFilterPrefChange, resetBrandFilters };
}

export default useBrandFilters;
