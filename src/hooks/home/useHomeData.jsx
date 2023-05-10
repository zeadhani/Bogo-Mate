import { useQuery } from "react-query";
import authFetch from "../../service/interceptors";

function useHomeData() {
  return useQuery(
    ["landingpageData"],
    async () => {
      const { data } = await authFetch.get(`/landingPage`);
      return data;
    },
    // { staleTime: 2 * 60 * 1000 }
  );
}

export default useHomeData;
