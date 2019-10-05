import React, { useContext, useState } from "react";
import { LayoutContext } from "./../contexts/LayoutContex";
import CountryCard from "./../components/countryCard/CountryCard";
import { Box, Flex, Card, Text, Button } from "rebass";
import Icon from "./Icons/Icon";
import Container from "./layout/Container";
import { CountriesContext } from "./../contexts/CountriesContext";
import { Input } from "@rebass/forms";
import Layer from "./layout/Layer";

const inputStyles = {
  color: "#fff",
  border: "none",
  backgroundColor: "#16416c",
  padding: "9px 14px",
  "::placeholder": {
    color: "#d2cece"
  }
};

export default function SearchModal() {
  const layoutContext = useContext(LayoutContext);
  const countriesContext = useContext(CountriesContext);
  const { closeSearchFn } = layoutContext;
  const {
    countriesIsLoaded,
    searchCountryFn,
    searchResult,
    resetSearchCountryFn
  } = countriesContext;
  const [inputTxt, setInputTxt] = useState("");

  const search = e => {
    setInputTxt(e.target.value);
    searchCountryFn(e.target.value);
  };

  const close = () => {
    resetSearchCountryFn();
    closeSearchFn();
  };

  return (
    <Layer zIndex="10">
      <Box as="header" bg="headerBg" height="55px">
        <Container>
          <Flex alignItems="center" height="55px">
            <Input
              placeholder="wpisz nazwe kraju"
              value={inputTxt}
              onChange={search}
              mr="20px"
              autoFocus={true}
              sx={inputStyles}
            />
            <Button variant="icon" onClick={close}>
              <Icon width="28px" height="28px" icon="CLOSE_ICON" />
            </Button>
          </Flex>
        </Container>
      </Box>

      <Container>
        {countriesIsLoaded ? (
          inputTxt.length > 0 ? (
            searchResult.length > 0 ? (
              <ul>
                {searchResult.map((country, i) => (
                  <CountryCard
                    key={country.name}
                    country={country}
                    space="32px"
                    counter={i}
                  />
                ))}
              </ul>
            ) : (
              <Card mt="32px">
                <p>nic nie znaleziono</p>
              </Card>
            )
          ) : (
            <Card mt="32px">
              <Text as="p">Wpisz nazwe szukanego kraju</Text>
              <Text as="p" mt="15px">
                Nazwa musi być w języku angielskim
              </Text>
            </Card>
          )
        ) : (
          <p>ladowanie</p>
        )}
      </Container>
    </Layer>
  );
}
