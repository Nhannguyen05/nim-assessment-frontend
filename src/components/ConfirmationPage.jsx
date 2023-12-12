import React, { useEffect, useState } from "react";
// import { OrderConfirmation } from './OrderConfirmation'; // Adjust the import path
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom

function ConfirmationPage() {
  const [order, setOrder] = useState(null);
  const { id: orderId } = useParams(); // Destructure 'id' from params using useParams

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${orderId}`);
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>;
  }

  // return <OrderConfirmation order={order} />;
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

export default ConfirmationPage;
