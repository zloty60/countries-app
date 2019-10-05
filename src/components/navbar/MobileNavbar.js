import React, { useContext } from "react";
import Icon from "./../Icons/Icon";
import { Button, Box, Flex, Link as RebassLink } from "rebass";
import { Link as RouterLink } from "react-router-dom";
import { LayoutContext } from "./../../contexts/LayoutContex";

export default function MobileNavbar() {
  const layoutContext = useContext(LayoutContext);
  const { openMenuFn, openSearchFn } = layoutContext;
  return (
    <Flex alignItems="center" justifyContent="space-between" height="55px">
      <Button onClick={openMenuFn} variant="icon">
        <Icon width="35px" height="35px" icon="MENU" />
      </Button>

      <RebassLink as={RouterLink} to="/" color="#fdfdfd">
        <Button
          variant="icon"
          to="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Icon width="35px" height="35px" icon="GLOBE" />
          <Box as="span" ml="9px">
            Country App
          </Box>
        </Button>
      </RebassLink>
      <Button variant="icon" onClick={openSearchFn}>
        <Icon width="35px" height="35px" icon="SEARCH" />
      </Button>
    </Flex>
  );
}
