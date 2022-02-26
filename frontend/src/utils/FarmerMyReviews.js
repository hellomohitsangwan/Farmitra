import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const FarmerMyReviews = async (token) => {
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(
    `/api/products/myreviews`,
    { product_id: product.product._id },
    config
  );
  return data;
};

export default FarmerMyReviews;