// OrderConfirmation.jsx
import React from "react";
// import ConfirmationPage from "./ConfirmationPage";

function OrderConfirmation({ order }) {
  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Name: {order.name}</p>
      <p>Address: {order.address}</p>
      <p>Items: {order.items.map((item) => item.item.name).join(", ")}</p>
      <p>Order ID: {order.id}</p>
    </div>
  );
}

export default OrderConfirmation;
