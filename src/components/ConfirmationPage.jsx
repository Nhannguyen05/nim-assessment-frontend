import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";

function ConfirmationPage() {
  const [order, setOrder] = useState(null);
  const { id: orderId } = useParams();

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

  return (
    <div>
      <OrderConfirmation order={order} />
    </div>
  );
}

export default ConfirmationPage;
