import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/OrderModal.module.css";

function OrderModal({ order, setOrderModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [validationErrors, setValidationErrors] = useState(null);

  const navigate = useNavigate();

  const validateForm = () => {
    // Validate phone number
    const phoneRegex = /^[0-9()-]+$/;
    if (!phoneRegex.test(phone)) {
      setValidationErrors(
        "Invalid phone number format. Please use (XXX) XXX-XXXX."
      );
      return false;
    }

    // Validate all fields are filled out
    if (!name || !phone || !address) {
      setValidationErrors("Please fill out all fields.");
      return false;
    }

    // Reset error if validation passes
    setValidationErrors(null);
    return true;
  };

  const placeOrder = async () => {
    try {
      // Validate the form
      if (!validateForm()) {
        return; // Do not submit data if validation fails
      }

      // Format phone number before sending to the server
      const formattedPhone = phone.replace(/[^\d]/g, ""); // Remove non-digit characters
      const formattedPhoneNumber = `(${formattedPhone.slice(
        0,
        3
      )}) ${formattedPhone.slice(3, 6)}-${formattedPhone.slice(6)}`;

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          phone: formattedPhoneNumber,
          address,
          items: order
        })
      });
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        const orderId = response.data.id;

        // Navigate to the Confirmation Page with the extracted order ID
        navigate(`/order-confirmation/${orderId}`);

        // Optionally close the modal after placing the order
        setOrderModal(false);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };
  return (
    <>
      <div
        label="Close"
        className={styles.orderModal}
        onKeyPress={(e) => {
          if (e.key === "Escape") {
            setOrderModal(false);
          }
        }}
        onClick={() => setOrderModal(false)}
        role="menuitem"
        tabIndex={0}
      />
      <div className={styles.orderModalContent}>
        <h2>Place Order</h2>
        <div className={styles.validationErrors}>{validationErrors}</div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">
              Name
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                type="text"
                id="name"
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">
              Phone
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setPhone(e.target.value);
                }}
                type="phone"
                id="phone"
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">
              Address
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setAddress(e.target.value);
                }}
                type="text"
                id="address"
              />
            </label>
          </div>
        </form>

        <div className={styles.orderModalButtons}>
          <button
            className={styles.orderModalClose}
            onClick={() => setOrderModal(false)}
          >
            Close
          </button>
          <button
            onClick={() => {
              placeOrder();
            }}
            className={styles.orderModalPlaceOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderModal;
