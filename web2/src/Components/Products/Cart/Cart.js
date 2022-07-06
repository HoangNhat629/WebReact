import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import { CartContext } from "../../Cart/Cart";
import { Link } from "react-router-dom";
import "./Cart.css";

export default class Cart extends Component {
  static contextType = CartContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const {
      cartItems,
      increase,
      reduction,
      removeProduct,
      total,
    } = this.context;
    if (cartItems.length === 0) {
      return (
        <>
          <Navbar />
          <h2 style={{ textAlign: "center" }}>Nothings Product</h2>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          {cartItems.map((item) => (
            <div className="details cart" key={item.id}>
              <img src={item.image} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price * item.count}</span>
                </div>

                <p>{item.description}</p>

                <div className="amount">
                  <button className="count" onClick={() => reduction(item.id)}>
                    {" "}
                    -{" "}
                  </button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increase(item.id)}>
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>{" "}
              <div className="delete" onClick={() => removeProduct(item.id)}>
                Delete
              </div>
            </div>
          ))}

          <div className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: ${total}</h3>
          </div>
        </>
      );
    }
  }
}
