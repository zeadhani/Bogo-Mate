import { Box, Pagination } from "@mui/material";
import React from "react";

function CustomPagination({ matches, count, rowsPerPage, page, handleChangePage }) {
  return (
    <Box display={"flex"} justifyContent={matches ? "center" : "right"}>
      <Pagination
        size={matches ? "small" : "medium"}
        count={Math.ceil(count / rowsPerPage)}
        sx={{ mt: 5 }}
        page={page + 1}
        onChange={handleChangePage}
        color="primary"
        hideNextButton
        hidePrevButton
      />
    </Box>
  );
}

export default CustomPagination;
