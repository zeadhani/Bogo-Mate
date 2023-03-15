import { Close, Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";

function FilterContainer({ matches, clearData, children }) {
  const [openFilter, setOpenFilter] = useState(false);
  const handleOpenFilter = () => {
    setOpenFilter((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "relative",
        mb: 1,
      }}
    >
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
            <IconButton onClick={handleOpenFilter}>
              {openFilter ? <Close /> : <Menu />}
            </IconButton>
            <Typography variant="h6" alignSelf={"center"}>
              Filters
            </Typography>
          </Box>

          {/* <Dialog open={openFilter} fullScreen>
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

            <Button
              variant="outlined"
              onClick={() => clearData()}
              size="small"
            >
              Clear Filters
            </Button>
          </Box>
        </Dialog> */}

          {openFilter && (
            <Box
              sx={{
                padding: 2,
              }}
              component={motion.div}
              initial={{ y: "-10%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
            >
              {children}
              <Button
                variant="outlined"
                onClick={() => clearData()}
                size="small"
              >
                Clear Filters
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default FilterContainer;
