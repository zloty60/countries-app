import React, { useContext } from "react";
import { CountriesContext } from "./../../contexts/CountriesContext";
import { Button } from "rebass";
import Icon from "./../Icons/Icon";

export default function Star({ country }) {
  const countriesContext = useContext(CountriesContext);
  const {
    saveCountryFn,
    savedCountries,
    deleteSavedCountryFn
  } = countriesContext;

  const isSavedinLocalStorage = countryName =>
    savedCountries.find(country => country.name === countryName);
  return (
    <>
      {isSavedinLocalStorage(country.name) ? (
        <Button
          variant="icon"
          onClick={e => deleteSavedCountryFn(country.name, e)}
          sx={{ right: "20px", position: "absolute" }}
        >
          <Icon width="35px" height="35px" icon="STAR" />
        </Button>
      ) : (
        <Button
          variant="icon"
          onClick={e => saveCountryFn(country, e)}
          sx={{ right: "20px", position: "absolute" }}
        >
          <Icon width="35px" height="35px" icon="STAR-OUTLINE" />
        </Button>
      )}
    </>
  );
}
