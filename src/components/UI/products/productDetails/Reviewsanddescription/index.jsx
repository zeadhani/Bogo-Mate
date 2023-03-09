import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { CommentOutlined, DescriptionOutlined } from "@mui/icons-material";
import Descritption from "./Descritption";
import Reviews from "./Reviews";
function ProductReviewsAndDescription() {
  const [Active, setActive] = useState("1");
  const handleChange = (e, newValue) => {
    setActive(newValue);
  };
  return (
    <Box border={"1px solid rgba(0,0,0,.1)"} sx={{ marginBottom: 2 }}>
      <TabContext value={Active}>
        <Box
          sx={{
            borderBottom: "1px solid rgba(0,0,0,.1)",

            width: "100%",
          }}
        >
          <TabList onChange={handleChange}>
            <Tab
              label="Description"
              value={"1"}
              disableRipple
              icon={<DescriptionOutlined />}
              iconPosition={"start"}
            />
            <Tab
              label="Reviews"
              value={"2"}
              disableRipple
              icon={<CommentOutlined />}
              iconPosition={"start"}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Descritption />
        </TabPanel>
        <TabPanel value="2">
          <Reviews />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default ProductReviewsAndDescription;
