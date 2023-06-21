import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../../../Theme";

function AttributeItem({ attribute, attributeData, onSelect, selectedValue }) {
  return (
    <Box my={1}>
      <Typography variant="h5" my={1}>
        {attribute}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} gap={0.5}>
        {attributeData?.map((item, index) => {
          const selected = item === selectedValue;
          return (
            <Button
              variant="outlined"
              onClick={() => onSelect(attribute, item)}
              key={item + index}
              sx={{
                bgcolor: selected ? colors.grey[900] : "",
                color: selected ? "#f5f5f5" : "",
                "&:hover": {
                  bgcolor: colors.grey[900],
                  color: "#f5f5f5",
                },
              }}
            >
              {item}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}

export default AttributeItem;
