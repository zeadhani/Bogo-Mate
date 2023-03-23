import React, { useState } from "react";
import ProductDescription from "./productDescription/ProductDescription";
import JoinPool from "./productDescription/JoinPool";

function HocDescription({
  id,
  name,
  brand,
  price,
  reviews,
  completedRequests,
  requestsLeft,
  hasAttributes,
  count,
  productItems,
}) {
  const [attributeInStock, setAttributeInStock] = useState();
  const handleAttributeInStock = (value)  => {
    setAttributeInStock(value);
  };
  return (
    <>
      <ProductDescription
        name={name}
        brand={brand}
        price={price}
        reviews={reviews}
        completedRequests={completedRequests}
        requestsLeft={requestsLeft}
        hasAttributes={hasAttributes}
        count={count}
        productItems={productItems}
        id={id}
        handleAttributeInStock={handleAttributeInStock}
        attributeInStock={attributeInStock}
      />
      <JoinPool
        count={count}
        hasAttributes={hasAttributes}
        attributeInStock={attributeInStock}
      />
    </>
  );
}

export default HocDescription;
