import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function RepliedFilter({
  repliedArray,
  resetContactUsFilter,
  handleRepliedFilterChange,
  repliedFilter,
}) {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <RadioGroup
        row
        value={repliedFilter}
        onChange={handleRepliedFilterChange}
      >
        {repliedArray.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio />}
            label={item}
          />
        ))}
      </RadioGroup>
      <Button onClick={resetContactUsFilter}>Reset</Button>
    </Box>
  );
}

export default RepliedFilter;
