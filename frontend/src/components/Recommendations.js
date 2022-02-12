import React from "react" 
import avator from "../assets/avator.svg"
import down from "../assets/avatorDown.svg"
import "./components.css"

const Recommendations = ({suggestion,user})=>{
    return (
        <div className="recom">
            <div className="recom-dropdown">
                <div className="recomsss">
                    <button className="avator"><img className="avatorImg" src={avator} alt="" />{user.name}<img className="down" src={down} alt="" /></button>
                    <ul className="recom-ul">
                        <li><span className="recom-span">Email : </span> {user.email}</li>
                        <li><span className="recom-span">Posted On : </span> {user.createdAt.split('T')[0]}</li>
                    </ul>
                    <p className="recomP"><span className="recom-span">Recommendation : </span>{suggestion}</p>
                </div>
            </div>
        </div>
    )
};

export default Recommendations

{/* <div className="info">
              <button className='info-button'>Hi! {userInfo.name.split(" ")[0]} <img src={dropdown} alt="" /></button>
                <ul>
                  <li><Link to='/profile'>Profile</Link></li>
                  <li><p onClick={logoutHandler} className='logout'>Logout</p></li>
                </ul>
            </div> */}