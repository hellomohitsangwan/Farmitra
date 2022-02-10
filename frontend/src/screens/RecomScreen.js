import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import FarmerMyRecom from "../utils/FarmerMyRecom";
import hero from "../assets/recomHero.svg";
import SingleRecom from '../components/Recommendations'

const RecomScreen = () => {
  const [myRecom, setMyRecom] = useState([]);
  const [loading, setLoading] = useState(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const getMyRecom = async () => {
    try {
      const response = await FarmerMyRecom(userInfo?.token);
      if (response) {
        setMyRecom(response);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userInfo?.token && userInfo?.isAdmin) {
      getMyRecom();
    }
  }, [userInfo]);

  console.log(myRecom);
  if (loading) {
    return <p>loading...</p>;
  }
  if(myRecom.length<1){
    return <h2>no recommendations till now!</h2>;
  }

  return (
    <>
      <div className="recommedation">
        <p>Recommendations</p>
      </div>
      {/* <div className="underline"></div> */}
      <div className="recom-image">
        <img src={hero} alt="" width={"800px"} />
      </div>
      <section className="info">
        {
          myRecom.map((recom)=>{
            return <SingleRecom key={recom.user._id}{...recom}/>
          })
        }
      </section>
    </>
  );
};

export default RecomScreen;
