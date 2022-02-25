import React from "react";
import Button from "../../../../components/button";
import "./index.css";
import logo from "../../../../components/Images/logo.svg";
const Header = () => {
  return (
    <div className="hu-headerr ">
      <div className="w-10/12 mx-auto mb-16 md:mb-24 hu-header">
        <div className="w-10/12 mx-auto hu-header_navbar flex justify-between items-center flex-row pt-10">
          <div>
            <img className="hc-header_logo" src={logo} alt="logo"></img>
          </div>
          <div className="flex flex-row items-center">
            <p className="navbar-text mr-10">Our Work</p>
            <Button
              // style={{ height: "72px" }}
              type="button"
              variant="secondary"
            >
              Contact
            </Button>
          </div>
        </div>
        <p className="hc-header_text mx-auto mt-16 md:mt-32 mx-12 md:mx-40">
          We work to bring a positive change
        </p>
        <div className="hc-header-stats flex flex-row justify-evenly mt-12 md:mt-16">
          <div>
            <p className="hc-stats-number">700+</p>
            <p className="hc-stats-desc"> Clients</p>
          </div>
          <div>
            <p className="hc-stats-number">700+</p>
            <p className="hc-stats-desc"> Clients</p>
          </div>{" "}
          <div>
            <p className="hc-stats-number">700+</p>
            <p className="hc-stats-desc"> Clients</p>
          </div>
        </div>
      </div>
      <div className=" w-10/12 grid grid-cols-1 sm:grid-cols-4 mx-auto gap-auto">
        <Button type="button" variant="secondary">
          Web delvelopment
        </Button>{" "}
        <Button type="button" variant="primary">
          App development
        </Button>{" "}
        <Button type="button" variant="primary">
          UI/UX Design
        </Button>{" "}
        <Button type="button" variant="primary">
          Dev Ops
        </Button>
      </div>
    </div>
  );
};

export default Header;
