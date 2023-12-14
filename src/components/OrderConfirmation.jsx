import React from "react";

function OrderConfirmation({ order }) {
  return (
    <div>
      <h1>Thank you for your order!</h1>
      <p>Name: {order.name}</p>
      <p>Address: {order.address}</p>
      <p>Order ID: {order.id}</p>
      <p>Items: {order.items.map((item) => item.item.name).join(", ")}</p>
      <p>Quantity: {order.items.map((item) => item.quantity).join(", ")}</p>
      <p>Price: {order.items.map((item) => item.item.price).join(", ")}</p>
      <img
        src={order.items.map((item) => item.item.image)}
        alt="Description of the {item.name}"
      />
    </div>
  );
}

export default OrderConfirmation;
