import { Close, Menu } from "@mui/icons-material";
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
function FilterContainer({ matches, children }) {
  const [openFilter, setOpenFilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter((prev) => !prev);
  };

  return (
    <Box sx={{ position: "relative", my: 1 }}>
      {!matches && (
        <Box
          sx={{
            paddingX: "10px",
            borderRight: "1px solid #e0e0e0",
            height: "100%",
            margin: "0 12px",
            bgcolor: "transparent",
            left: 0,
            right: 0,
            top: 44,
            zIndex: 999,
            paddingY: "10px",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          {children}
        </Box>
      )}
      {matches && (
        <>
          <Box display={"flex"} gap={1}>
            <IconButton onClick={handleOpenFilter}>{<Menu />}</IconButton>
            <Typography variant="h6" alignSelf={"center"}>
              Filters
            </Typography>
          </Box>
          <Dialog open={openFilter} fullScreen>
            <Box
              p={2}
              component={motion.div}
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Box display={"flex"} justifyContent={"right"}>
                <IconButton onClick={handleOpenFilter}>
                  <Close />
                </IconButton>
              </Box>
              {children}
            </Box>
          </Dialog>
        </>
      )}
    </Box>
  );
}

export default FilterContainer;
{
  /* {matches && (
        <Box display={"flex"} gap={1}>
          <IconButton onClick={handleOpenFilter}>
            {openFilter ? <Close /> : <Menu />}
          </IconButton>
          <Typography variant="h6" alignSelf={"center"}>
            Filters
          </Typography>
        </Box>
      )} 
      {(openFilter || !matches) && (
        <Box
          sx={{
            paddingX: "10px",
            borderRight: "1px solid #e0e0e0",
            height: matches ? "fit-content" : "100%",
            margin: matches ? "0px" : "0 12px",
            position: matches && "absolute",
            bgcolor: matches ? colors.grey[100] : "transparent",
            left: 0,
            right: 0,
            top: 44,
            zIndex: 999,
            paddingY: matches ? "20px" : "10px",
            borderRadius: "5px",
            width: "100%",
          }}
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {children}
        </Box>
      )} */
}
