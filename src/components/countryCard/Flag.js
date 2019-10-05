import React from "react";
import { Box } from "rebass";

export default function Flag({ src, alt, width }) {
  return (
    <Box
      as="img"
      src={src}
      alt={alt}
      sx={{
        width: width,
        height: "100%",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
      }}
    />
  );
}
