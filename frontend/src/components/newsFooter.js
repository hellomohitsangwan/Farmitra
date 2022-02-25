import React from "react";
import "./newsFooter.css";
import logo from "./Images/logo.svg";

const Footer = () => {
  return (
    <>
      <div className="mt-20 hc-footer w-10/12 mx-auto grid grid-cols-2 lg:grid-cols-8">
        <div className="col-span-2 lg:col-span-4 flex flex-col lg:mr-56">
          <img className="hc-footer_img" src={logo}></img>
          <p className="hc-footer_text">
            Hustle is a modern online platform which gives your business growth
            by providing best serivces .
          </p>
        </div>
        <div className="flex flex-col lg:mt-0 mt-10">
          <p className="hc-footer_text_heading">QUICK LINK</p>
          <p className="hc-footer_text_subheading mt-4">Home</p>
          <p className="hc-footer_text_subheading mt-2">Services</p>
          <p className="hc-footer_text_subheading mt-2">Contact Us</p>
        </div>
        <div className="flex flex-col lg:mt-0 mt-10">
          <p className="hc-footer_text_heading">QUICK LINK</p>
          <p className="hc-footer_text_subheading mt-4">Home</p>
          <p className="hc-footer_text_subheading mt-2">Services</p>
          <p className="hc-footer_text_subheading mt-2">Contact Us</p>
        </div>{" "}
        <div className="flex flex-col  lg:mt-0 mt-10">
          <p className="hc-footer_text_heading">QUICK LINK</p>
          <p className="hc-footer_text_subheading mt-4">Home</p>
          <p className="hc-footer_text_subheading mt-2">Services</p>
          <p className="hc-footer_text_subheading mt-2">Contact Us</p>
        </div>{" "}
        <div className="flex flex-col  lg:mt-0   mt-10">
          <p className="hc-footer_text_heading">QUICK LINK</p>
          <p className="hc-footer_text_subheading mt-4">Home</p>
          <p className="hc-footer_text_subheading mt-2">Services</p>
          <p className="hc-footer_text_subheading mt-2">Contact Us</p>
        </div>
      </div>
      <div className=" w-10/12 mx-auto my-4">
        <div className="hc-footer_line"></div>
        <p className="hc-footer_lastLine my-4 sm:text-center">
          © Copyright 2022. Hustle. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
