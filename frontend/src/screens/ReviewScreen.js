import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import FarmerMyReview from "../utils/FarmerMyReviews";
import "./Screen.css";
import axios from "axios";

const RecomScreen = () => {
  const [reviewId, setReviewId] = useState({name:""});
  const data = JSON.stringify({
    id: { reviewId },
  });

  

  const config = {
    method: "get",
    url: "http://localhost:4848/api/products/myreviews",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDU2MzVjNTFjNGRmMWJlZDVmNDQ3ZSIsImlhdCI6MTY0NDY4MTQ5NiwiZXhwIjoxNjQ3MjczNDk2fQ.AMMCV4nQD6-6cCOTlCeFjC5FvMHTMlJh1EebDxG6olY",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

    function submit(e){
      e.preventDefault();
      setReviewId({})
    }
    function handle(e) {
      const newdata = { ...data };
      newdata[e.target.id] = e.target.value;
      reviewId(newdata);
      console.log(newdata);
    }

  return (
    <>
    No review till now!
      {/* <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
          type="text"
          className="contact-input name-input mob-input"
          placeholder="Your Name"
          required
        />
      </form> */}
    </>
  );
};

export default RecomScreen;
