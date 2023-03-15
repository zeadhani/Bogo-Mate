import React from "react";
import HeaderImage from "../../components/UI/Global/Header";
import { Grid } from "@mui/material";
import CustomContainer from "../../components/UI/Global/CustomContainer";

function ShopContainer({ children }) {
  return (
    <CustomContainer nav={"/shop"}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12}>
          <HeaderImage
            image={
              "https://res.cloudinary.com/df2862din/image/upload/v1677676881/c1_bz702m.jpg"
            }
          />
        </Grid>
        {children}
      </Grid>
    </CustomContainer>
  );
}

export default ShopContainer;
