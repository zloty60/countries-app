import React from "react";
import { Box, Card, Text, Flex } from "rebass";
import Flag from "./../countryCard/Flag";
import Star from "./../countryCard/Star";
import useFormatNumber from "./../../hooks/useFormatNumber";

export default function FullCountryCard({ space, country }) {
  const formattedArea = useFormatNumber(country.area);
  const formattedPopulation = useFormatNumber(country.population);

  return (
    <>
      <Card
        variant="fullCountryCard"
        mt={space}
        mb={space}
        sx={{ position: "relative" }}
      >
        <Flex alignItems="center">
          <Flag src={country.flag} alt="flaga" width="100px" />
          <Box ml="25px">
            <Text as="h2">{country.name}</Text>
            <Text as="p">{country.region}</Text>
          </Box>
          <Star country={country} />
        </Flex>
        <Box mt="30px">
          <ul>
            <FullCountryCardListItem
              feature="Stolica"
              value={country.capital}
              link
            />
            <FullCountryCardListItem
              feature="Populacja"
              value={formattedPopulation}
            />
            <FullCountryCardListItem
              feature="Natywna nazwa"
              value={country.nativeName}
            />
            <FullCountryCardListItem
              feature="Powierzchnia"
              value={formattedArea}
              squareKilometers={true}
            />
            <FullCountryCardListItem
              feature="Waluta"
              value={country.currencies[0].name}
            />
            <FullCountryCardListItem
              feature="Domena"
              value={country.topLevelDomain}
            />
            <FullCountryCardListItem
              feature="Strefa czasowa"
              value={country.timezones}
            />
            <FullCountryCardListItem
              feature="Międzynarodowy numer kierunkowy"
              value={country.callingCodes}
            />
          </ul>
        </Box>
      </Card>
    </>
  );
}

const FullCountryCardListItem = props => (
  <Text as="li" p="10px 0" sx={{ borderBottom: "1px solid #ddd" }}>
    <span>{props.feature}:</span>
    {props.link ? (
      <Text
        ml="20px"
        as="a"
        href={`https://en.wikipedia.org/wiki/${props.value}`}
        target="_blank"
        rel="noopener noreferrer "
        sx={{ fontStyle: "italic" }}
      >
        {props.value}
      </Text>
    ) : (
      <Text
        ml="20px"
        as="span"
        sx={{ fontStyle: "italic", wordBreak: "break-all" }}
      >
        {props.value} {props.squareKilometers ? <span>km&#178;</span> : null}
      </Text>
    )}
  </Text>
);
