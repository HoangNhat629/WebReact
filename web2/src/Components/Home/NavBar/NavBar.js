import React, { useState, useEffect, useContext } from "react";
import { Nav } from "reactstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Cart2 } from "../../ProductGetApi/GlobalState";
export default function NavBar() {
  const state = useContext(Cart2);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [isLogged] = state.userAPI.isLogged;

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <Nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Finn <i className="fa-brands fa-wolf-pack-battalion"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa-solid fa-x" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links" onClick={closeMenu}>
                Contacts
              </Link>
            </li>
            {isLogged ? (
              ""
            ) : (
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links-sign"
                  onClick={closeMenu}
                >
                  Sign In
                </Link>
              </li>
            )}
          </ul>
          {isLogged ? (
            ""
          ) : (
            <>{button && <Button buttonStyle="btn--outline">SIGN IN</Button>}</>
          )}
        </div>
      </Nav>
    </>
  );
}
