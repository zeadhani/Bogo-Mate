import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import AttributeItem from "./AttributeItem";
import authFetch from "../../../../../service/interceptors";

function Attributes({
  prodcutAttributeValues,
  id,
  handleAttributeInStock,
  setAttributeId,
}) {
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const attributes = [];
  const attributeValues = {};
  prodcutAttributeValues?.forEach((item) => {
    item?.ProductAttributesValues?.forEach((attributeValue) => {
      const attributeName = attributeValue.attribute.name;
      const attributeVal = attributeValue.value;
      if (!attributes.includes(attributeName)) {
        attributes.push(attributeName);
      }
      if (!attributeValues[attributeName]) {
        attributeValues[attributeName] = [];
      }
      if (!attributeValues[attributeName].includes(attributeVal)) {
        attributeValues[attributeName].push(attributeVal);
      }
    });
  });

  const handleAttributeSelect = (attributeName, attributeVal) => {
    setSelectedAttributes((prevSelectedAttributes) => ({
      ...prevSelectedAttributes,
      [attributeName]: attributeVal,
    }));
  };

  const checkStockAvailablity = async () => {
    if (attributes.length === Object.keys(selectedAttributes).length) {
      const baseUrl = `/products/${id}/item`;
      const paramsString = Object.entries(selectedAttributes)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("&");
      const url = `${baseUrl}?${paramsString}`;
      const data = await authFetch.get(`${url}`);
      if (!data.data[0]?.count) {
        handleAttributeInStock("outStock");
      } else {
        handleAttributeInStock("inStock");
        setAttributeId(data.data[0].id);
      }
    }
    // console.log(data.data);
  };
  useEffect(() => {
    if (Object.keys(selectedAttributes).length > 0) {
      checkStockAvailablity();
    }
  }, [selectedAttributes]);

  return (
    <Box mt={1} mb={4}>
      {attributes?.map((item) => (
        <AttributeItem
          key={item}
          attribute={item}
          attributeData={attributeValues?.[item]}
          onSelect={handleAttributeSelect}
          selectedValue={selectedAttributes?.[item]}
        />
      ))}
    </Box>
  );
}

export default Attributes;
