import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./components.css";
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    // <Form onSubmit={submitHandler} inline>
    //   <Form.Control
    //     type="text"
    //     name="q"
    //     onChange={(e) => setKeyword(e.target.value)}
    //     placeholder="Search Products..."
    //     className="ml-5 ml-5 pl-5 ml-4 ml-3 ml-2 px-5"
    //   ></Form.Control>
    //   <Button type="submit" variant="outline-success" className="p-2">
    //     Search
    //   </Button>
    // </Form>
    <form onSubmit={submitHandler}>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="form-control"
          placeholder="Enter Product Name ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
