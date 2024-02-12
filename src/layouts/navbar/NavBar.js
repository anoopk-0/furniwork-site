import React from "react";
import logo from "../../assets/images/logo.svg";

const menu = [
  "Products",
  "Solutions",
  "Resources",
  "Knowledge",
  "Stories",
  "Work from Home",
];

const NavBar = () => {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu">
          <ul>
            {menu?.map((menuItem, index) => (
              <li key={index}>{menuItem}</li>
            ))}
          </ul>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
