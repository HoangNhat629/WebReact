import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Cart/Cart";
import { Cart2 } from "../../ProductGetApi/GlobalState";
export default function Navbar() {
  const state = new useContext(Cart2);
  const [isLogged] = state.userAPI.isLogged;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">
          FINN SHOP
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-items">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink className="nav-link" to="/product">
                Items
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            {isLogged ? (
              ""
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-dark">
                  <i className="fa-solid fa-right-to-bracket me-1"></i> Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                  <i className="fa-solid fa-user-plus"></i> Register
                </NavLink>
              </>
            )}

            <CartContext.Consumer>
              {({ cartItems }) => (
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <i class="fa-solid fa-cart-shopping"></i> Cart (
                  {cartItems.length})
                </NavLink>
              )}
            </CartContext.Consumer>
          </div>
        </div>
      </div>
    </nav>
  );
}
