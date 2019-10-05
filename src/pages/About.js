import React from "react";
import Container from "./../components/layout/Container";
import { Card, Text, Box, Link } from "rebass";

export default function About() {
  return (
    <Container>
      <Card mt="55px">
        <Text as="h2" fontSize="18px">
          Działanie
        </Text>
        <Box as="ul" mt="15px" pl="5px" sx={{ lineHeight: "1.6" }}>
          <Text as="li" sx={{ listStyle: "inside" }}>
            Strona główna pokazuję listę wszyskich krajów
          </Text>
          <Text as="li" sx={{ listStyle: "inside" }}>
            Kraje można filtrować na podstawie kontynetów oraz sortować w
            zależności od powierchni lub populacji{" "}
          </Text>
          <Text as="li" sx={{ listStyle: "inside" }}>
            Kraje można zapisywać klikając w gwiazdkę
          </Text>
          <Text as="li" sx={{ listStyle: "inside" }}>
            Kraje można wyszukiwać
          </Text>
        </Box>
      </Card>
      <Card mt="55px">
        <Text as="h2" fontSize="18px">
          Użyte technologie:
        </Text>
        <Box as="ul" mt="15px" pl="5px" sx={{ lineHeight: "1.6" }}>
          <Text as="li" sx={{ listStyle: "inside" }}>
            React
          </Text>
          <Text as="li" sx={{ listStyle: "inside" }}>
            React hooks
          </Text>
          <Text as="li" sx={{ listStyle: "inside" }}>
            React router
          </Text>
          <Text as="li" sx={{ listStyle: "inside" }}>
            Axios
          </Text>
          <Text as="li" sx={{ listStyle: "inside" }}>
            Rebass
          </Text>
          <Text as="li" sx={{ listStyle: "inside" }}>
            API:{" "}
            <Link
              href="https://restcountries.eu/"
              color="#1c00f1"
              sx={{
                ":hover": {
                  textDecoration: "underline"
                }
              }}
            >
              Rest Countries
            </Link>
          </Text>
        </Box>
      </Card>
    </Container>
  );
}
