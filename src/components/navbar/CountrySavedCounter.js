import React, { useContext } from "react";
import { Box } from "rebass";
import { CountriesContext } from "./../../contexts/CountriesContext";

export default function CountrySavedCounter(props) {
  const countriesContext = useContext(CountriesContext);

  return (
    <Box
      as="span"
      sx={{
        backgroundColor: "#b9153d",
        padding: "2px 4px",
        marginLeft: props.ml,
        color: props.color
      }}
    >
      {countriesContext.savedCountries.length}
    </Box>
  );
}
