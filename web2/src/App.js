import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Components/Home/Home";
import { Cart2 } from "./Components/ProductGetApi/GlobalState";

import Main from "./Components/Products/Main";
import Product from "./Components/Products/Product/Product";
import Cart from "./Components/Products/Cart/Cart";
import About from "./Components/About/Main";
import Contact from "./Components/Contact/Contact";
import Product2 from "./Components/ProductGetApi/components/products/Products";
import Login from "./Components/ProductGetApi/components/mainpages/auth/Login";
import Register from "./Components/ProductGetApi/components/mainpages/auth/Register";
import Cart3 from "./Components/ProductGetApi/components/mainpages/Cart/Cart";
import NotFound from "./Components/ProductGetApi/components/utils/not_found/NotFound";
import DetailProduct from "./Components/ProductGetApi/components/detailProduct/DetailProduct";
import OrderHistory from "./Components/ProductGetApi/components/history/OrderHistory";
import OrderDetails from "./Components/ProductGetApi/components/history/OrderDetails";
import Categories from "./Components/ProductGetApi/components/categories/Categories";
import CreateProduct from "./Components/ProductGetApi/components/createProduct/CreateProduct";
export default function App() {
  const location = useLocation();
  const state = useContext(Cart2);

  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Main />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<Product2 />} />
        <Route path="/detail/:id" exact element={<DetailProduct />} />
        <Route path="/login" element={isLogged ? <NotFound /> : <Login />} />
        <Route
          path="/register"
          element={isLogged ? <NotFound /> : <Register />}
        />
        <Route
          path="/history"
          element={isLogged ? <OrderHistory /> : <NotFound />}
        />
        <Route
          path="/history/:id"
          element={isLogged ? <OrderDetails /> : <NotFound />}
        />
        <Route path="/cart2" element={<Cart3 />} />
        <Route path="*" exact element={<NotFound />} />
        <Route
          path="/category"
          exact
          element={isAdmin ? <Categories /> : <NotFound />}
        />
        <Route
          path="/create_product"
          exact
          element={isAdmin ? <CreateProduct /> : <NotFound />}
        />
        <Route
          path="/edit_product/:id"
          exact
          element={isAdmin ? <CreateProduct /> : <NotFound />}
        />
      </Routes>
    </div>
  );
}
