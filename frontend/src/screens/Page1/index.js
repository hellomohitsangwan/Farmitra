import React from "react";
//import button from '@material-ui/core';
import Header from "./Sections/Header";
import project_3 from "../../components/Images/project_3.svg";
import "./index.css";
import { Section2 } from "./Sections/Section2";
import Footer from "../../components/newsFooter";
import Section4 from "./Sections/Section4";
const Page1 = () => {
  return (
    <>
      {<Header />}
      {<Section2 />}
      {<Section4 />}
      {<Footer />}
    </>
  );
};

export default Page1;
