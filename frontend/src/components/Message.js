import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import ClearIcon from "@material-ui/icons/Clear";

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && (
        <Alert show={show} variant={variant}>
          <div className="d-flex justify-content-between">
            {children}
            <Button
              onClick={() => {
                setShow(false);
                console.log(show);
              }}
              className="btn brn-sm"
            >
              <ClearIcon fontSize="small" />
            </Button>
          </div>
        </Alert>
      )}
      {!show && (
        <div className="d-flex justify-content-end">
          <button
            className="m-2 btn p-2 ml-auto btn-outline-danger"
            onClick={() => setShow(true)}
          >
            Show Error
          </button>
        </div>
      )}
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
