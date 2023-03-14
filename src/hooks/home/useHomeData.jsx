import { useQuery } from "react-query";
import authFetch from "../../service/interceptors";

function useHomeData({ email }) {
  return useQuery(
    ["landingpageData", email],
    async () => {
      const { data } = await authFetch.get(`/landingPage/${email}`);
      return data;
    },
    // { staleTime: 2 * 60 * 1000 }
  );
}

export default useHomeData;
