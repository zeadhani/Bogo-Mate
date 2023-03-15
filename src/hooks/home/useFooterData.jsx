import { useQuery } from "react-query";
import authFetch from "../../service/interceptors";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
function useFooterData() {
  const [state, dispatch] = useReducer(reducer, { data: null });
  useEffect(() => {
    async function fetchData() {

      const response = await authFetch.get("/setting");
      dispatch({ type: "SET_DATA", payload: response.data });
    }
    fetchData();
  }, []);

  return { data: state.data };
}
export default useFooterData;
