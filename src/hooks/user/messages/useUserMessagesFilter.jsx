import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const repliedArray = ["replied", "notreplied"];
function useUserMessagesFilter() {
    const [searchParams] = useSearchParams();
    const [repliedFilter, setrepliedFilter] = useState(
      searchParams.get("replied") ? searchParams.get("replied") : ""
    );
    const handleRepliedFilterChange = (e) => {
      setrepliedFilter(e.target.value);
    };
    const resetContactUsFilter = () => {
      setrepliedFilter("");
    };
    return {
      repliedArray,
      resetContactUsFilter,
      handleRepliedFilterChange,
      repliedFilter,
    };
}

export default useUserMessagesFilter