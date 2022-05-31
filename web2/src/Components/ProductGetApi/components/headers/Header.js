import React, { useContext, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Cart2 } from "../../GlobalState";
import axios from "axios";
export default function Header() {
  const state = useContext(Cart2);
  console.log(state);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.clear();

    localStorage.removeItem("firstLogin");
    window.location.href = "/";
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };
  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className="logo">
        <h1>
          <Link to="/">{isAdmin ? "Admin" : "Finn Shop"}</Link>
        </h1>
      </div>
      <ul style={styleMenu}>
        <li>
          <Link to="/product">{isAdmin ? "" : "Items"}</Link>
        </li>
        <li>
          <Link to="/products">{isAdmin ? "Products" : "Shop"}</Link>
        </li>
        {isAdmin && adminRouter()}

        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">Login ✥ Register</Link>
          </li>
        )}
        <li className="menu" onClick={() => setMenu(!menu)}>
          <i className="fa-solid fa-xmark"></i>
        </li>
      </ul>
      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart2">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
      )}
    </header>
  );
}
