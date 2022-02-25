import React from "react";
// import Button from "@mui/material";
// import Header from "./Sections/Header";
// import project_3 from "../../components/Images/project_3.svg";
import "./index.css";
import { Section2 } from "./Sections/Section2";
// import Footer from "../../components/newsFooter";
// import Section4 from "./Sections/Section4";
const Page1 = () => {
  return (
    <>
      <p className="text-2xl">Hello</p>
      {/* <Header /> */}
      <Section2 />
      {/* <Section4 /> */}
      {/* <Footer /> */}
    </>
    // <div className="w-11/12 mx-auto ">
    //   <div className="grid grid-flex-row lg:grid-cols-2 grid-cols-1">
    //   <div className="hc_card mx-auto mb-16 pb-8">
    //       <img src={project_3}></img>

    //       <div className="mx-8">
    //         <p className="mt-5 md:mt-2 hc_card_heading">Fitnenss</p>
    //         <p className="mt-1 mb-2 md:mt-2 md:mb-4">
    //           Lörem ipsum oskade minnespinne polyligen. Ditektig dysgyn, ante re
    //           dölig. Treliga. skade Krobebett skade{" "}
    //         </p>

    //         <span className="mr-2 lg:mr-4 lg:mb-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI/UX design
    //           </Button>
    //         </span>
    //         <span className="mr-4 lg:mr-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI
    //           </Button>
    //         </span>
    //         <span className="mr-4 lg:mr-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI/UX design
    //           </Button>
    //         </span>
    //       </div>
    //     </div>

    //     <div className="hc_card mx-auto mb-16 pb-8">
    //       <img src={project_3}></img>

    //       <div className="mx-8">
    //         <p className="mt-5 md:mt-2 hc_card_heading">Fitnenss</p>
    //         <p className="mt-1 mb-2 md:mt-2 md:mb-4">
    //           Lörem ipsum oskade minnespinne polyligen. Ditektig dysgyn, ante re
    //           dölig. Treliga. skade Krobebett skade{" "}
    //         </p>

    //         <span className="mr-2 lg:mr-4 lg:mb-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI/UX design
    //           </Button>
    //         </span>
    //         <span className="mr-4 lg:mr-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI
    //           </Button>
    //         </span>
    //         <span className="mr-4 lg:mr-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI/UX design
    //           </Button>
    //         </span>
    //       </div>
    //     </div>

    //     <div className="hc_card mx-auto mb-16 pb-8">
    //       <img src={project_3}></img>

    //       <div className="mx-8">
    //         <p className="mt-5 md:mt-2 hc_card_heading">Fitnenss</p>
    //         <p className="mt-1 mb-2 md:mt-2 md:mb-4">
    //           Lörem ipsum oskade minnespinne polyligen. Ditektig dysgyn, ante re
    //           dölig. Treliga. skade Krobebett skade{" "}
    //         </p>

    //         <span className="mr-2 lg:mr-4 lg:mb-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI/UX design
    //           </Button>
    //         </span>
    //         <span className="mr-4 lg:mr-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI
    //           </Button>
    //         </span>
    //         <span className="mr-4 lg:mr-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI/UX design
    //           </Button>
    //         </span>
    //       </div>
    //     </div>

    //     <div className="hc_card mx-auto mb-16 pb-8">
    //       <img src={project_3}></img>

    //       <div className="mx-8">
    //         <p className="mt-5 md:mt-2 hc_card_heading">Fitnenss</p>
    //         <p className="mt-1 mb-2 md:mt-2 md:mb-4">
    //           Lörem ipsum oskade minnespinne polyligen. Ditektig dysgyn, ante re
    //           dölig. Treliga. skade Krobebett skade{" "}
    //         </p>

    //         <span className="mr-2 lg:mr-4 lg:mb-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI/UX design
    //           </Button>
    //         </span>
    //         <span className="mr-4 lg:mr-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI
    //           </Button>
    //         </span>
    //         <span className="mr-4 lg:mr-4">
    //           <Button
    //             style={{
    //               fontSize: "12px",
    //               padding: "4px 20px",
    //               border: "0.864198px solid #0070E4",
    //             }}
    //             type="card"
    //             variant="primary"
    //           >
    //             UI/UX design
    //           </Button>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Page1;
