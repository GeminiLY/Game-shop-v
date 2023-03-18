import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import CartItem from "./CartItems";
import axios from "axios";
import { Link } from "react-router-dom";
import PayPalButton from "./paybalBotton";
import { getData } from "../helper/axios";
import { getCookieValue } from "../../helper/cookies";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const decrease = (id) => {
    let index = cartItems.findIndex((item) => item.id === id);
    let tmp = [...cartItems];
      axios.delete(`http://127.0.0.1:8000/cart/${id}/delete`);
      tmp.splice(index, 1);
    setCartItems(tmp);
  };
  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    getShoppingCart();
  }, []);

  const getShoppingCart = async () => {
    const user_id = getCookieValue("user_id");
    console.log(user_id);
    try {
      const shoppingCart = await getData({ url: `/cart/${1}/get` });
      setCartItems(shoppingCart.data.prod_cart);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-header"> Shopping Cart </h2>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {" "}
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                decrease={decrease}
              />
            ))}
          </div>
          <div>
            <p>
              <strong>Paybal email:</strong> sb - qonwa25271562
              @personal.example.com
            </p>
            <p>
              <strong>Paybal password:</strong> 00000000
            </p>
          </div>
          <div className="cart-summary">
            <p className="cart-summary-text">
              Subtotal:
              <span className="cart-summary-price">
                $ {cartTotal.toFixed(2)}
              </span>
            </p>
            <Link to="/Paypage"><button id="check">Check</button></Link>
            <PayPalButton />
          </div>
        </>
      ) : (
        <p className="empty-cart-message"> Your cart is empty. </p>
      )}
    </div>
  );
}

export default ShoppingCart;
