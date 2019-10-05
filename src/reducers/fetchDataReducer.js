export default function countriesReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
    case "ERROR":
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
}
