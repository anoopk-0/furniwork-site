import React, { useRef, useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/logo.svg";
import { NavLink as Link, useNavigate } from "react-router-dom";

const menu = [
  { to: "/products", name: "Products" },
  { to: "/solutions", name: "Solutions" },
  { to: "/resources", name: "Resources" },
  { to: "/knowledge", name: "Knowledge" },
  { to: "/stories", name: "Stories" },
  { to: "/work-from-home", name: "Work from Home" },
];

const NavBar = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

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
        <div className={`mobile-menu ${isActive ? "show" : ""}`} ref={menuRef}>
          {menu.map((menuItem, index) => (
            <div className="menu-item" key={index}>
              <Link to={menuItem.to}>{menuItem.name}</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NavBar;
