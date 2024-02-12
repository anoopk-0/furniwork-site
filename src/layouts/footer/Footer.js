import React from "react";
import footerLogo from "../../assets/images/hm-logo-gray.svg";
import { footerData } from "./fixture";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div>
          <img src={footerLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
