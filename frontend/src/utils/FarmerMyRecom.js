import React from 'react';
import axios from 'axios';

const FarmerMyRecom = async (token) => {
    const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const {data} = await axios.get(`/api/recom/myrec`,config);
      return data;
};

export default FarmerMyRecom;