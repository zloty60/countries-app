import React, { useContext } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import MobileMenu from "./MobileMenu";
import { Box } from "rebass";
import Container from "./../layout/Container";
import SearchModal from "./../SearchModal";
import { LayoutContext } from "./../../contexts/LayoutContex";

export default function Header() {
  const layoutContext = useContext(LayoutContext);
  const { searchModalState } = layoutContext;
  return (
    <>
      <Box
        as="header"
        bg="headerBg"
        height="55px"
        alignItems="center"
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "2"
        }}
      >
        <Container flexGrow="1">
          {/* Pokazuje mobile i menuMobile */}
          <Box display={["block", "none"]}>
            <MobileNavbar />
            <MobileMenu />
          </Box>
          <Box display={["none", "block"]}>
            <DesktopNavbar />
          </Box>
        </Container>
      </Box>
      {searchModalState && <SearchModal />}
    </>
  );
}
