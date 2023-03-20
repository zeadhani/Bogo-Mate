import { Box } from "@mui/material";
import React from "react";

import AttributeItem from "./AttributeItem";

const SIZES = ["xs", "sm", "md", "lg"];
const COLORS = ["red", "green", "yellow", "black"];

function Attributes() {
  return (
    <Box mt={1} mb={4}>
      <AttributeItem attribute={"Color"} attributeData={COLORS} />
      <AttributeItem attribute={"Size"} attributeData={SIZES} />
    </Box>
  );
}

export default Attributes;
