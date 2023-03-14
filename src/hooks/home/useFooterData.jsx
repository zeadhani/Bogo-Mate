import { useQuery } from "react-query";
import authFetch from "../../service/interceptors";

function useFooterData() {
  return useQuery(
    "settingData",
    async () => {
      const { data } = await authFetch.get(`/setting`);
      return data;
    },
    // { staleTime: 10 * 60 * 1000 }
  );
}

export default useFooterData;
