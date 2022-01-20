import React from "react";
import "./components.css";
import "../screens/Screen.css";
const MainFooter = () => {
  return (
    // <footer className="MainFooter mt-auto">
    //   <p className="text-center , py-3">Copyright Vedhut &copy;</p>
    // </footer>
    <footer>
      <div className="links container">
        <ul className="social-media-links">
          <li>
            <a href="#">
              <i className="fab fa-discord fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-at fa-2x"></i>
            </a>
          </li>
        </ul>
        <p>FarmHUB &copy;, 2021 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default MainFooter;
