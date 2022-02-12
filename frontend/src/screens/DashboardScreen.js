import React from "react";
import "./Screen.css";
import { Link } from "react-router-dom";
import dashArrow from "../assets/dashArrow.svg";
import dashFarmer from "../assets/dashboardBackground.svg";
import { useSelector } from "react-redux";

const DashboardScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <>
      {userInfo && userInfo.isAdmin && (
        <div>
          <div className="background">
            <img src={dashFarmer} alt="" />
          </div>
          <div className="dashboard">
            <div className="amount-dashboard">
              <div className="amount-rect">
                <div className="rect-details">
                  <div className="gap"></div>
                  <div className="heading">
                    <p className="amt-title">Farmer's Dashboard</p>
                  </div>
                  {/* <div className="amount">$1299.67</div> */}
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="products-dashboard">
                <div className="products-rect">
                  <div className="rect-details">
                    <div className="gap"></div>
                    <div className="heading">
                      <p>Products</p>
                    </div>
                    {/* <div className="amount">9</div> */}
                    <div className="dashArrow">
                      <Link to={"/admin/productlist"}>
                        <button className="dashBtn">
                          <img src={dashArrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="orders-dashboard">
                <div className="orders-rect">
                  <div className="gap"></div>
                  <div className="rect-details">
                    <div className="heading">
                      <p>Orders</p>
                    </div>
                    {/* <div className="amount">3</div> */}
                    <div className="dashArrow">
                      <Link to={"/admin/orderlist"}>
                        <button className="dashBtn">
                          <img src={dashArrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row3">
              <div className="users-dashboard">
                <div className="user-rect">
                  <div className="gap"></div>
                  <div className="rect-details">
                    <div className="heading">
                      <p>Recom</p>
                    </div>
                    {/* <div className="amount">3</div> */}
                    <div className="dashArrow1 ">
                      <Link to={"/recommendations"}>
                        <button className="dashBtn3">
                          <img src={dashArrow} alt="" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reviews-dashboard">
                <div className="reviews-rect">
                  <div className="gap"></div>
                  <div className="rect-details">
                    <div className="heading">
                      <p>Reviews</p>
                    </div>
                    {/* <div className="amount">2</div> */}
                    <div className="dashArrow">
                    <Link to={"/Reviews"}>
                      <button className="dashBtn2">
                        <img src={dashArrow} alt="" />
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stock-dashboard">
                <div className="stock-rect">
                  <div className="gap"></div>
                  <div className="rect-details">
                    <div className="heading">
                      <p>Out of Stock</p>
                    </div>
                    {/* <div className="amount">5</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DashboardScreen;
