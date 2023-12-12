import React from "react";

function OrderConfirmation({ order }) {
  return (
    <div>
      <h1>Thank you for your order!</h1>
      <p>Name: {order.name}</p>
      <p>Address: {order.address}</p>
      <p>Items: {order.items.map((item) => item.item.name).join(", ")}</p>
      <p>Order ID: {order.id}</p>
    </div>
  );
}

export default OrderConfirmation;
