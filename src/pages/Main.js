import React, { useContext } from "react";
import { Box, Flex } from "rebass";
import Container from "./../components/layout/Container";
import { CountriesContext } from "./../contexts/CountriesContext";
import CountryCard from "./../components/countryCard/CountryCard";
import Select from "./../components/select/Select";
import Circle from "./../components/Circle";

export default function Main() {
  const countriesContext = useContext(CountriesContext);
  const {
    countriesIsLoaded,
    countriesForRednder,
    filterContinentFn,
    continentSelectValue,
    sortSelectValue,
    sortCountriesFn
  } = countriesContext;

  const handleContinentChange = e => {
    filterContinentFn(e.target.value);
  };
  const handleSortChange = e => {
    sortCountriesFn(e.target.value);
  };

  return (
    <>
      <Container>
        {countriesIsLoaded ? (
          <>
            <Flex justifyContent="space-between" flexWrap="wrap">
              <Box width={["100%", "45%"]}>
                <Select
                  margin={["40px 0 0 0", "55px 0 35px 0"]}
                  value={continentSelectValue}
                  onChange={handleContinentChange}
                >
                  <option value="All">Wszystkie kraje</option>
                  <option value="Europe">Europa</option>
                  <option value="Africa">Afryka</option>
                  <option value="Asia">Azja</option>
                  <option value="Americas">Ameryka Pn/Pd</option>
                  <option value="Polar">Antarktyda</option>
                  <option value="Oceania">Australia</option>
                </Select>
              </Box>
              <Box width={["100%", "45%"]}>
                <Select
                  margin={["40px 0 15px 0", "55px 0 35px 0"]}
                  value={sortSelectValue}
                  onChange={handleSortChange}
                >
                  <option value="nameMin">Alfabetycznie a-z</option>
                  <option value="nameMax">Alfabetycznie z-a</option>
                  <option value="populationMax">Populacja max</option>
                  <option value="populationMin">Populacja min</option>
                  <option value="areaMax">Powierzchnia max</option>
                  <option value="areaMin">Powierzchnia min</option>
                </Select>
              </Box>
            </Flex>
            <ul style={{ padding: 0 }}>
              {countriesForRednder.map((el, i) => (
                <CountryCard
                  key={el.name}
                  country={el}
                  space="32px"
                  counter={i}
                  details
                  sortSelectValue={sortSelectValue}
                />
              ))}
            </ul>
          </>
        ) : (
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)"
            }}
          >
            <Circle />
          </Box>
        )}
      </Container>
    </>
  );
}
