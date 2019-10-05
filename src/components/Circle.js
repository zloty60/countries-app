import React from "react";
import { Box } from "rebass";

export default function Circle(props) {
  return (
    <Box
      sx={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "12px solid #d4d4d4",
        borderTop: "12px solid #a5a5a5",
        animation: "spin 1s linear infinite"
      }}
    />
  );
}
