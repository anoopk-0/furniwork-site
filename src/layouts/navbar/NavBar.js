import React, { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const menu = [
  { to: "/products", name: "Products" },
  { to: "/solutions", name: "Solutions" },
  { to: "/resources", name: "Resources" },
  { to: "/knowledge", name: "Knowledge" },
  { to: "/stories", name: "Stories" },
  { to: "/work-from-home", name: "Work from Home" },
];

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-container">
        <div className="content-wrapper">
          <div className="md-menu" onClick={() => setIsActive(!isActive)}>
            <AiOutlineMenuUnfold />
          </div>

          <div
            className="logo"
            onClick={() => navigate("/", { replace: true })}
          >
            <img src={logo} alt="logo" />
          </div>
          <div className="menu">
            <ul>
              {menu?.map((menuItem, index) => (
                <li key={index}>
                  <Link to={menuItem.to}>{menuItem.name}</Link>
                </li>
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
