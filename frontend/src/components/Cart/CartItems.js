import React from "react";
import "./CartItem.css";

function CartItem(props) {
  const {id, image, name, price,decrease} = props;
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={image} alt="item" />
      <div className="cart-item-details">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">{`$${price}`}</p>
        <div className="cart-item-quantity">
          <button
          onClick={()=>{
            decrease(id)
          }}
          >Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
