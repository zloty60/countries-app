import React, { createContext, useReducer } from "react";
import layoutReducer from "./../reducers/layoutReducer";

export const LayoutContext = createContext();

export default function LayoutState(props) {
  const initialState = {
    menuState: false,
    searchModalState: false
  };

  const [state, dispatch] = useReducer(layoutReducer, initialState);

  const openMenuFn = () => {
    dispatch({
      type: "OPEN_MENU"
    });
  };

  const closeMenuFn = () => {
    dispatch({
      type: "CLOSE_MENU"
    });
  };

  const closeSearchFn = () => {
    dispatch({
      type: "CLOSE_SEARCH"
    });
  };

  const openSearchFn = () => {
    dispatch({
      type: "OPEN_SEARCH"
    });
  };

  return (
    <LayoutContext.Provider
      value={{
        openMenuFn,
        menuState: state.menuState,
        closeMenuFn,
        searchModalState: state.searchModalState,
        closeSearchFn,
        openSearchFn
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
}
