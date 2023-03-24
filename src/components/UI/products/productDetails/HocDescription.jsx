import React, { useState } from "react";
import ProductDescription from "./productDescription/ProductDescription";
import JoinPool from "./productDescription/JoinPool";
import authFetch from "../../../../service/interceptors";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import io from "socket.io-client";
const socket = io(process.env.REACT_APP_API_URL);
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
  offerId,
  handleClose,
  handleOpen,
}) {
  const [attributeInStock, setAttributeInStock] = useState();
  const [attributeId, setAttributeId] = useState(null);
  const useData = useSelector((state) => state.Auth.user);
  const email = useData.replace(/"/g, "");
  const handleAttributeInStock = (value) => {
    setAttributeInStock(value);
  };

  const handleJoinPoll = (text) => async () => {
    if (text === "Join pool") {
      handleOpen();
      try {
        const user = await authFetch.get(`/user/${email}`);
        if (!user.data) return;
        let data = { offerId, userId: user.data.id, productId: id };
        if (Boolean(hasAttributes)) {
          data["productItemsId"] = attributeId;
        }

        const req = await authFetch.post("/request", data);
        if (req.status === 200) {
          socket.emit("add_request", { message: offerId });
          handleClose();
          toast.success("Pool Joined");
          return;
        }
      } catch (err) {
        handleClose();
        toast.error("Please try again later!");
      }
    }
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
        setAttributeId={setAttributeId}
      />
      <JoinPool
        count={count}
        hasAttributes={hasAttributes}
        attributeInStock={attributeInStock}
        handleJoinPoll={handleJoinPoll}
      />
    </>
  );
}

export default HocDescription;
