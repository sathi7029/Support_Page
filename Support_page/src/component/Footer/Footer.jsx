import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="foot">
      <div className="side">
        <div className="left">
          <h3 className="leftl">Contact Us At</h3>
          <label htmlFor="" className="labell">
            abcxyz@support.com
          </label>
        </div>
        <div className="right">
          <h3 className="rightr">Cheack Documentation</h3>
          <li className="l">Term and Condition</li>
          <li className="l">Privacy Policy</li>
          <li className="l">Data protection</li>
        </div>
      </div>
      <div className="bottom">
        <h4 className="bottomb">
          Support Page Copyright 2023 @ All Rights Reserved
        </h4>
      </div>
    </div>
  );
}

export default Footer;
