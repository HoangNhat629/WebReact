import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Cart2 } from "../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import Header from "../headers/Header";
import "./detailProduct.css";
import Comment from "./Comment";
export default function DetailProduct() {
  const params = useParams();
  const state = useContext(Cart2);
  const [products] = state.productsAPI.products;
  const [detailProduct, setDetailProduct] = useState([]);
  const addCart = state.userAPI.addCart;

  console.log(params);
  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) {
          setDetailProduct(product);
        }
      });
    }
  }, [params.id, products]);
  if (detailProduct.length === 0) return null;

  return (
    <>
      <Header />
      <div className="detail">
        <img src={detailProduct.images.url} alt="" />
        <div className="box-detail">
          <div className="row_id">
            <h2>{detailProduct.title}</h2>
            <h6>#id: {detailProduct.product_id}</h6>
          </div>
          <span>$ {detailProduct.price}</span>
          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>
          <p>Sold: {detailProduct.sold}</p>
          <Link
            to="/cart2"
            className="cart"
            onClick={() => addCart(detailProduct)}
          >
            Buy Now
          </Link>
        </div>
      </div>
      {products.map((product) => {
        return product._id === params.id ? (
          <Comment key={product._id} product={product} />
        ) : null;
      })}

      <div>
        <h2>Related Products</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}
