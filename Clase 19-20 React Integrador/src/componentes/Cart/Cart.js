import React from "react";

export const Cart = ({ cartItems }) => {
  return (
    <>
      <div className="cart-items">
        <div className="cart-items-header"> Cart Items</div>

        {cartItems.length === 0 && (
          <div className="cart-items-empty"> No items are added </div>
        )}

        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-list">
              <img className="cart-items-img" src={item.img} /> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;