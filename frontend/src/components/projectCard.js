import React from "react";
import Button from "./Button";
import "./index.css";

const ProjectCard = ({ children, skills }) => {
  return (
    <div className="hc_card ">
      {children}

      <div className="mx-8">
        <p className="mt-2 hc_card_heading">Fitness</p>
        <p className="mt-2 mb-4">
          Lörem ipsum oskade minnespinne polyligen. Ditektig dysgyn, ante re
          dölig. Treliga. skade Krobebett skade{" "}
        </p>

        <Button
          style={{
            fontSize: "12px",
            padding: "4px 20px",
            border: "0.864198px solid #0070E4",
          }}
          type="card"
          variant="primary"
        >
          UI/UX design
        </Button>
        <Button
          style={{
            fontSize: "12px",
            padding: "4px 20px",
            border: "0.864198px solid #0070E4",
          }}
          type="card"
          variant="primary"
        >
          UI/UX design
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
