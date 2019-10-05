import React, { useContext } from "react";
import Container from "./../components/layout/Container";
import { CountriesContext } from "./../contexts/CountriesContext";
import CountryCard from "./../components/countryCard/CountryCard";
import { Box, Card } from "rebass";

export default function SavedCountries() {
  const countriesContext = useContext(CountriesContext);
  const { savedCountries } = countriesContext;

  return (
    <>
      <Container>
        <Box mt="70px" as="ul">
          {savedCountries.length > 0 ? (
            savedCountries.map((el, i) => (
              <CountryCard
                key={el.name}
                country={el}
                space="32px"
                counter={i}
              />
            ))
          ) : (
            <Card>
              <p>Nie ma nic zapisanego , dodaj kraj za pomocą gwiazdki </p>
            </Card>
          )}
        </Box>
      </Container>
    </>
  );
}
