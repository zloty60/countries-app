import React from "react";
import Container from "./../components/layout/Container";
import { Flex, Box, Text, Button } from "rebass";
import Icon from "./../components/Icons/Icon";
import Circle from "./../components/Circle";
import FullCountryCard from "./../components/fullCountryCard/FullCountryCard";
import useAxios from "./../hooks/useAxios";

export default function Country(props) {
  const url = `https://restcountries.eu/rest/v2/name/${props.match.params.name}`;

  // problem z search
  const [{ isLoaded, data }] = useAxios(url);
  if (data.length > 0) {
    if (props.match.params.name !== data[0].name) {
      window.location.reload();
    }
  }

  return (
    <>
      {isLoaded ? (
        <Container>
          <Box mt="75px" />
          <Flex alignItems="center">
            <Button
              id="btn"
              variant="icon"
              onClick={() => props.history.goBack()}
            >
              <Icon width="40px" height="40px" icon="LEFT_ARROW" />
            </Button>
            <Text as="label" htmlFor="btn">
              Poprzednia strona
            </Text>
          </Flex>
          <FullCountryCard country={data[0]} space="50px" />
        </Container>
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
    </>
  );
}
