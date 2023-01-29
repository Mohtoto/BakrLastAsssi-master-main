import React from "react";
import pic from "../assets/5.png";
import logo from "../assets/2.png";

const OurPage = () => {
  return (
    <section id="our__Page">
      <div className="container">
        <div className="Cont__View">
          <img className="logo logoView" src={logo} alt="" />
          <h1>WHY OUR SODA</h1>
        </div>

        <div className="row">
          <div className="Our-image__holder">
            <img className="Our-image" src={pic} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPage;
