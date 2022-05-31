import React, { useContext, useState, useEffect } from "react";
import { Cart2 } from "../../GlobalState";
import Header from "../headers/Header";
import ProductItem from "../utils/productItem/ProductItem";
import Loading from "../utils/loading/Loading";
import "./products.css";
import axios from "axios";
import Filter from "./Filters";
import LoadMore from "./LoadMore";
import img from "../../../../assets/images/background.webp";

export default function Products() {
  const state = useContext(Cart2);

  const [products, setProducts] = state.productsAPI.products;
  console.log(products);

  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  const [callback, setCallback] = state.productsAPI.callback;
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  const deleteProduct = async (id, public_id) => {
    try {
      setLoading(true);
      const destroyImg = axios.post(
        "/api/destroy",
        { public_id },
        {
          headers: { Authorization: token },
        }
      );
      const deleteProduct = axios.delete(`/api/products/${id}`, {
        headers: { Authorization: token },
      });

      await destroyImg;
      await deleteProduct;
      setCallback(!callback);
      setLoading(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const checkAll = () => {
    products.forEach((product) => {
      product.checked = !isCheck;
    });
    setProducts([...products]);
    setIsCheck(!isCheck);
  };

  const deleteAll = () => {
    products.forEach((product) => {
      if (product.checked) deleteProduct(product._id, product.images.public_id);
    });
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <>
      <Header />
      {!isAdmin && (
        <div className="hero">
          <div className="card bg-dark text-white border-0">
            <img src={img} className="card-img" alt="Background" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                {" "}
                <h5 className="card-title display-3 fw-border mb-0">
                  NEW SEASON ARRIVALS
                </h5>
                <p className="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr />
      <div className="col-12 mb-5">
        <h1 className="display-6 fw-bolder text-center"> PRODUCTS </h1>
        <hr />
      </div>
      <Filter />
      {isAdmin && (
        <div className="delete-all">
          <span>Select all</span>
          <input type="checkbox" checked={isCheck} onChange={checkAll} />
          <button onClick={deleteAll}>Delete ALL</button>
        </div>
      )}

      <div className="products">
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              product={product}
              isAdmin={isAdmin}
              deleteProduct={deleteProduct}
              handleCheck={handleCheck}
            />
          );
        })}
      </div>
      <LoadMore />
      {products.length === 0 && <Loading />}
    </>
  );
}
