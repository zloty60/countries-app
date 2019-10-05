import React, { useContext } from "react";
import Icon from "./../Icons/Icon";
import { Button, Box, Flex } from "rebass";
import { NavLink as RouterLink } from "react-router-dom";
import CountrySavedCounter from "./CountrySavedCounter";
import { LayoutContext } from "./../../contexts/LayoutContex";

export default function DesktopNavbar() {
  const layoutContext = useContext(LayoutContext);
  const { openSearchFn } = layoutContext;
  return (
    <Flex alignItems="center" justifyContent="space-between" height="55px">
      <RouterLink
        to="/"
        exact
        className="desktop-menu-link"
        activeStyle={{
          backgroundColor: "#143a60"
        }}
      >
        <Icon width="35px" height="35px" icon="GLOBE" />
        <Box as="span" ml="9px">
          Country App
        </Box>
      </RouterLink>
      <RouterLink
        to="/saved-countries"
        activeStyle={{
          backgroundColor: "#143a60"
        }}
        className="desktop-menu-link"
      >
        Zapisane kraje
        <CountrySavedCounter ml="5px" color="#fff" />
      </RouterLink>
      <RouterLink
        to="/about"
        activeStyle={{
          backgroundColor: "#143a60"
        }}
        className="desktop-menu-link"
      >
        O projekcie
      </RouterLink>
      <Button variant="icon" onClick={openSearchFn}>
        <Icon width="32px" height="32px" icon="SEARCH" />
      </Button>
    </Flex>
  );
}
