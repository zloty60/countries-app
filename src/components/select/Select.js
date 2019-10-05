import React from "react";
import { Card } from "rebass";

export default function Select(props) {
  return (
    <Card
      as="select"
      value={props.value}
      onChange={props.onChange}
      m={props.margin}
      sx={{
        border: "none",
        display: "block",
        width: "100%",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "box-shadow .3s",
        ":hover": {
          boxShadow: "0 6px 12px 0 rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.08)"
        }
      }}
    >
      {props.children}
    </Card>
  );
}
