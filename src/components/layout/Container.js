import React from "react";
import { Box } from "rebass";

export default function Container(props) {
  return (
    <Box
      sx={{
        maxWidth: ["none", "540px", "720px"],
        paddingLeft: "15px",
        paddingRight: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        flexGrow: props.flexGrow
      }}
    >
      {props.children}
    </Box>
  );
}
