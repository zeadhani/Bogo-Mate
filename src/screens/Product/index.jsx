import React from "react";
import { useParams } from "react-router-dom";
import CustomContainer from "../../components/UI/Global/CustomContainer";

function ProductsDashboard() {
  const { brand } = useParams();

  return <CustomContainer nav={`/shop/${brand}`}>{brand}</CustomContainer>;
}

export default ProductsDashboard;
