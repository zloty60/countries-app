export default function layoutReducer(state, action) {
  switch (action.type) {
    case "OPEN_MENU":
      return {
        ...state,
        menuState: true
      };
    case "CLOSE_MENU":
      return {
        ...state,
        menuState: false
      };
    case "CLOSE_SEARCH":
      return {
        ...state,
        searchModalState: false
      };
    case "OPEN_SEARCH":
      return {
        ...state,
        searchModalState: true
      };
    default:
      return state;
  }
}
