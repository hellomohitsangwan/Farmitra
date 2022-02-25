import React from "react";
import Button from "../../../../components/button";
import "./index.css";
import Group from "../../../../components/Images/Group.svg";
const Section4 = () => {
  return (
    <div className="lg:flex lg:flex-row w-10/12 mx-auto hc-banner">
      <div className="hc-banner_left md:w-1/2 md:pt-12 md:pl-12  lg:pt-16 lg:pl-16 ">
        <p className="hc-banner_left_heading">Have a Project for Us ?</p>
        <p className="hc-banner_left_text md:mt-2 lg:mt-4">
          Lörem ipsum oskade minnespinne polyligen. Ditektig dysgy antevere
          dölig. Treliga. Krobebett
        </p>
        <div className="hc-banner_left_button">
          {" "}
          <Button type="button lg:mt-12 md:mt-6" variant="secondary">
            Contact us
          </Button>
        </div>
      </div>
      <div className="hc-banner_right lg:w-1/2">
        <img
          src={Group}
          className="hc-banner_right_image lg:m-4 lg:mt-8"
          alt="img"
        ></img>
      </div>
    </div>
  );
};

export default Section4;
