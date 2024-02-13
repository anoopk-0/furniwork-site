import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
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
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <div className="content-wrapper">
          <div className="md-menu" onClick={() => setIsActive(!isActive)}>
            <AiOutlineMenuUnfold />
          </div>

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
            <CiSearch />
            <input type="text" placeholder="search" />
          </div>
        </div>
      </div>
      {isActive && (
        <div className={`mobile-menu ${isActive ? "show" : ""}`}>
          {menu.map((menu) => (
            <div className="menu-item">{menu}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
