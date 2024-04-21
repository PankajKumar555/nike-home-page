import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../Images/pngimg.com - nike_PNG4.png";
import { VscThreeBars } from "react-icons/vsc";
import "./Navbar.css";

const Header = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" style={{ height: "27px" }} />
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">MEN</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">WOMEN</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">KIDS</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio">NEW</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">SALE</Link>
          </li>
        </ul>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            style={{
              paddingLeft: "2rem",
              borderRadius: "20px",
              border: "none",
              height: "1.5rem",
              backgroundColor: "#8e8f93",
              color: "white",
              "::placeholder": { color: "white" },
            }}
          />
          <AiOutlineSearch
            style={{
              position: "absolute",
              top: "50%",
              left: "5px",
              transform: "translateY(-50%)",
              color: "white",
            }}
          />
        </div>
        <div className="cart-icon">
          <RiShoppingBag3Line style={{ color: "white" }} size={25} />
          <p className="cart-icon-qty">1</p>
        </div>
      </nav>
      {isLargeScreen ? (
        <VscThreeBars
          style={{ color: "white", padding: "0rem", margin: "0px 1rem" }}
          size={35}
        />
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
