import React from 'react'
import axios from 'axios';

const FarmerProductData = async (token) => {
    const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const {data} = await axios.get(`/api/products/myproducts`,config);
      return data;
      
}

export default FarmerProductData
