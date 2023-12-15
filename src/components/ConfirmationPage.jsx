import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";
import { testOrder } from "../sampleTestData";
import styles from "./styles/ConfirmationPage.module.css";

function ConfirmationPage() {
  const [order, setOrder] = useState(null);
  const { id: orderId } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // const response = await fetch(`/api/orders/${orderId}`);
        // const data = await response.json();
        setOrder(testOrder);
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
    <div className={styles.page}>
      <div className={styles.confirmation}>
        <OrderConfirmation order={order} />
      </div>
    </div>
  );
}

export default ConfirmationPage;
