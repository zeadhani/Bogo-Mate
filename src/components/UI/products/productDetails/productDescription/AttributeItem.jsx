import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../../../Theme";

function AttributeItem({ attribute, attributeData }) {
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const handleAttributeChange = (data) => () => {
    setSelectedAttribute(data);
  };
  return (
    <Box my={1}>
      <Typography variant="h5" my={1}>
        {attribute}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} gap={0.5}>
        {attributeData.map((item) => {
          const selected = selectedAttribute === item;
          return (
            <Button
              variant="outlined"
              onClick={handleAttributeChange(item)}
              key={item}
              sx={{
                bgcolor: selected ? colors.grey[900] : "",
                color: selected ? "#f5f5f5" : "",
                "&:hover": {
                  bgcolor: selected ? "#f5f5f5" : colors.grey[900],
                  color: selected ? "#222" : "#f5f5f5",
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
