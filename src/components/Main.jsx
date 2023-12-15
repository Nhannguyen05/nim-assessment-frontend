import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Order from "./Order";
import OrderModal from "./OrderModal";
import styles from "./styles/Order.module.css";

const page = {
  backgroundImage: `url("https://media.istockphoto.com/id/1191879835/photo/empty-tabletop-in-the-coffe-shop.jpg?s=612x612&w=0&k=20&c=0ng1OHRLWiD0cVHdYZbmARj0fyR0HQ35BOFF7Ry8Qqs=")`,
  backgroundSize: "cover",
  color: "white"
};


function Main() {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderModal, setOrderModal] = useState(false);

  const getItems = async () => {
    const response = await fetch("/api/menu");
    const data = await response.json();
    setMenuItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="page" style={page}>
      {orderModal && <OrderModal order={order} setOrderModal={setOrderModal} />}
      <h1>Create an order</h1>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Menu menuItems={menuItems} order={order} setOrder={setOrder} />
        </div>
        {order.length > 0 && (
          <Order order={order} setOrderModal={setOrderModal} />
        )}
      </div>
    </div>
  );
}

export default Main;
