import React, { useContext } from "react";
import { LayoutContext } from "./../../contexts/LayoutContex";
import { Box, Flex, Button } from "rebass";
import { NavLink as RouterLink } from "react-router-dom";
import Icon from "./../Icons/Icon";
import CountrySavedCounter from "./CountrySavedCounter";

export default function MobileMenu() {
  const layoutContext = useContext(LayoutContext);
  const { closeMenuFn, menuState } = layoutContext;

  return (
    <>
      <RestPageWrapper menuState={menuState} closeMenuFn={closeMenuFn} />
      <MobileMenuWrapper menuState={menuState}>
        <Button
          onClick={closeMenuFn}
          variant="icon"
          sx={{ left: "25px", top: "30px", position: "absolute" }}
        >
          <Icon width="35px" height="35px" icon="LEFT_ARROW" />
        </Button>
        <Flex
          as="ul"
          height="100%"
          flexDirection="column"
          justifyContent="center"
          pl="25px"
        >
          <RouterLink
            to="/"
            exact
            onClick={closeMenuFn}
            activeStyle={{
              fontWeight: "bold"
            }}
            className="mobile-menu-link"
          >
            Strona główna
          </RouterLink>
          <RouterLink
            to="/saved-countries"
            onClick={closeMenuFn}
            activeStyle={{
              fontWeight: "bold"
            }}
            className="mobile-menu-link"
          >
            Zapisane kraje
            <CountrySavedCounter ml="5px" color="#fff" />
          </RouterLink>
          <RouterLink
            to="/about"
            onClick={closeMenuFn}
            activeStyle={{
              fontWeight: "bold"
            }}
            className="mobile-menu-link"
          >
            O projekcie
          </RouterLink>
        </Flex>
      </MobileMenuWrapper>
    </>
  );
}

const MobileMenuWrapper = props => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      right: "25%",
      bottom: 0,
      backgroundColor: "#fff",
      transition: "transform 600ms cubic-bezier(0, .52,0,1)",
      transform: props.menuState ? "translateX(0)" : "translateX(-100%)",
      zIndex: 4
    }}
  >
    {props.children}
  </Box>
);

const RestPageWrapper = props => (
  <Box
    onClick={props.closeMenuFn}
    sx={{
      display: props.menuState ? "block" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#ddd",
      opacity: 0.8,
      zIndex: 3
    }}
  ></Box>
);
