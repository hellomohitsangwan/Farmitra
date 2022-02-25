import React from "react";
import "./LandingHomeScreen.css";
function LandingHomeScreen() {
  return (
    <>
      <div className="intro">
        <div className="intro-content">
          <p className="main-heading">
            Looking for fresh products? Then you've come to the right place!
          </p>
          <p className="sub-heading">We are here to help you and the farmer!</p>
          <div className="button"></div>
          <div className="button"></div>
        </div>
      </div>
      <div className="stats"></div>
      <div className="reviews">
        <div className="review-heading">
          <div className="review-head-center">
            <h1>Reviews Posted By Farmers</h1>
            <div className="hr-center">
              <hr />
            </div>
          </div>
        </div>
        <div className="card-1">
          <div className="card-img"></div>
          <div className="card-content"></div>
        </div>
        <div className="card-2">
          <div className="card-img"></div>
          <div className="card-content"></div>
        </div>
      </div>
    </>
  );
}

export default LandingHomeScreen;
