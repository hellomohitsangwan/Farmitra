import React from "react" 
import avator from "../assets/avator.svg"
import down from "../assets/avatorDown.svg"

const Recommendations = ({suggestion,user})=>{
    return (
        <div className="recom">
            <tbody>
                <td><img src={avator} alt="" /></td>
                <td>{user.name}</td>
                <td><img src={down} alt="" /></td>
                <td>{user.email}</td>
                <td>{user.createdAt.split('T')[0]}</td>
                <td>{suggestion}</td>
            </tbody>
        </div>
    )
};

export default Recommendations