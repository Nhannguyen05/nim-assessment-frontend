import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles/Nav.module.css";

function Nav() {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <ul className={styles.navListLeft}>
        <li className={styles.navItem}>
          <Link
            to="/"
            className={`${styles.navLink} ${
              location.pathname === "/" && styles.active
            }`}
          >
            Main Page
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link
            to="/order-confirmation/:id"
            className={`${styles.navLink} ${
              location.pathname === "/order-confirmation/:id" && styles.active
            }`}
          >
            Your Order
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
