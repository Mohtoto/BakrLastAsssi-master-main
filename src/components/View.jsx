import React, { useState } from "react";
import logo from "../assets/2.png";
import pic1 from "../assets/1.png";
import pic2 from "../assets/4.png";
import {
  SlButton,
  SlDialog,
  SlCard,
  SlTooltip,
} from "@shoelace-style/shoelace/dist/react";
import Dialog from "./Dialog";

const View = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="View">
      {/* <div className="container"> */}
        <div className="Cont__View">
          <img className="logo logoView" src={logo} alt="" />
          <h1>OUR BEST SODA</h1>
        </div>

        <div className="mainPcs">
          <div className="img__holder">
            <img className="imags imgSmall" src={pic1} alt="" />

            <Dialog />
          </div>

          <div className="img__holder">
            <img className="imags" src={pic2} alt="" />

            <Dialog />
          </div>

          {/* <SlTooltip content="Click again to dismiss" trigger="click">
          <SlButton>Click to Toggle</SlButton>
      </SlTooltip>
        */}
        </div>
      {/* </div> */}
    </section>
  );
};

export default View;
