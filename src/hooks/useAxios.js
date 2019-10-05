import { useState, useEffect, useReducer } from "react";
import fetchDataReducer from "./../reducers/fetchDataReducer";
import axios from "axios";

export default function useAxios(initialUrl) {
  const initialState = {
    isLoading: false,
    isError: false,
    isLoaded: false,
    data: []
  };

  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(fetchDataReducer, initialState);

  useEffect(() => {
    const fetchData = () => {
      dispatch({ type: "FETCH_INIT" });
      axios
        .get(url)
        .then(response =>
          dispatch({ type: "FETCH_SUCCESS", payload: response.data })
        )
        .catch(err => dispatch({ type: "ERROR" }));
    };
    fetchData();
  }, [url]);

  return [state, setUrl];
}
