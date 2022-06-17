import React from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsList = (
    <ul>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price,
          }}
        />
      ))}
    </ul>
  );
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItemsList}
    </Card>
  );
};

export default Cart;
