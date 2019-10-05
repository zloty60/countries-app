import React from "react";
import { Box } from "rebass";

export default function Layer(props) {
  return (
    <Box
      sx={{
        position: props.position ? props.position : "fixed",
        top: props.top ? props.top : "0",
        left: props.top ? props.left : "0",
        right: props.right ? props.right : "0",
        bottom: props.bottom ? props.bottom : "0",
        zIndex: props.zIndex ? props.zIndex : "1",
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : "#eeeeee",
        overflow: props.overflow ? props.overflow : "auto"
      }}
    >
      {props.children}
    </Box>
  );
}
