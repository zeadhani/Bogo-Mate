import { useQuery } from "react-query";
import authFetch from "../../service/interceptors";

function useUser({ email }) {
  return useQuery(
    ["userData", email],
    async () => {
      const { data } = await authFetch.get(`/user/${email}`);
      return data;
    },
    { staleTime: 10 * 60 * 1000 }
  );
}

export default useUser;
