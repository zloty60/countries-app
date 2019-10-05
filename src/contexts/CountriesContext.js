import React, { useReducer, createContext, useEffect } from "react";
import countriesReducer from "./../reducers/countriesReducer";
import axios from "axios";

export const CountriesContext = createContext();

export default function CountriesState(props) {
  const initialState = {
    countriesIsError: false,
    countriesIsLoaded: false,
    allCountries: [],
    countriesForRednder: [],
    searchResult: [],
    savedCountries: localStorage.getItem("savedCountries")
      ? JSON.parse(localStorage.getItem("savedCountries"))
      : [],
    countryIsLoaded: false,
    continentSelectValue: "All",
    sortSelectValue: "nameMin"
  };

  const [state, dispatch] = useReducer(countriesReducer, initialState);

  const url = "https://restcountries.eu/rest/v2/all";
  useEffect(() => getCountriesFn(), [url]);

  // za kazdym razem jak zmieni sie stan z savedCountries dodaj do local storage
  useEffect(() => {
    localStorage.setItem(
      "savedCountries",
      JSON.stringify(state.savedCountries)
    );
  }, [state.savedCountries]);

  const getCountriesFn = () => {
    axios
      .get(url)
      .then(response =>
        dispatch({ type: "GET_COUNTIRES", payload: response.data })
      )
      .catch(err => console.log(err)); // wtedy error dac na true
  };

  const searchCountryFn = inputTxt => {
    dispatch({
      type: "SEARCH_COUNTRY",
      txt: inputTxt
    });
  };

  const filterContinentFn = continent => {
    dispatch({
      type: "FILTER_CONTINENT",
      payload: continent
    });
    dispatch({
      type: "DISPLAY_BY"
    });
  };

  const sortCountriesFn = sortOptions => {
    console.log(sortOptions);
    dispatch({
      type: "SORT_COUNTIRES",
      payload: sortOptions
    });
    dispatch({
      type: "DISPLAY_BY"
    });
  };

  const saveCountryFn = (country, event) => {
    // prevent i stop zeby klikając w gwiazdke nie zmieniać strony dla pojedynczego kraju
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: "SAVE_COUNTRY",
      payload: country
    });
  };

  const deleteSavedCountryFn = (countryName, event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: "DELETE_SAVED_COUNTRY",
      payload: countryName
    });
  };

  const resetSearchCountryFn = () => {
    dispatch({
      type: "RESET_SEARCH_COUNTRY"
    });
  };

  return (
    <CountriesContext.Provider
      value={{
        allCountries: state.allCountries,
        countriesForRednder: state.countriesForRednder,
        searchResult: state.searchResult,
        countriesIsError: state.countriesIsError,
        countriesIsLoaded: state.countriesIsLoaded,
        searchCountryFn,
        countryIsLoaded: state.countryIsLoaded,
        filterContinentFn,
        continentSelectValue: state.continentSelectValue,
        sortSelectValue: state.sortSelectValue,
        sortCountriesFn,
        saveCountryFn,
        savedCountries: state.savedCountries,
        deleteSavedCountryFn,
        resetSearchCountryFn
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
}
