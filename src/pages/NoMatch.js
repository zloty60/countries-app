import React from "react";
import Container from "../components/layout/Container";
import { Heading, Box } from "rebass";
import Icon from "./../components/Icons/Icon";

export default function NoMatch() {
  return (
    <Container>
      <Box mt="75px" sx={{ textAlign: "center" }}>
        <Heading fontSize="85px">404</Heading>
        <Heading mt="55px" mb="55px" fontSize="55px" sx={{ fontWeight: "100" }}>
          Nie znaleziono strony
        </Heading>
        <Icon width="200px" height="200px" icon="SAD" />
      </Box>
    </Container>
  );
}
