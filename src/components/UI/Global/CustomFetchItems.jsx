import { Grid, Typography } from "@mui/material";
import React from "react";
import CustomPagination from "./Pagination";

function CustomFetchItems({
  count,
  model,
  matches,
  children,
  rowsPerPage,
  page,
  handleChangePage,
}) {
  return (
    <>
      {model?.length === 0 ? (
        <Grid item xs={matches ? 12 : 9}>
          <Typography textAlign={"center"} variant="h5">
            No Items Available
          </Typography>
        </Grid>
      ) : (
        <>{children}</>
      )}
      <Grid item xs={12}>
        <CustomPagination
          handleChangePage={handleChangePage}
          matches={matches}
          page={page}
          rowsPerPage={rowsPerPage}
          count={count}
        />
      </Grid>
    </>
  );
}

export default CustomFetchItems;
