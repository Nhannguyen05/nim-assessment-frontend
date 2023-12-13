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
            to="/order"
            className={`${styles.navLink} ${
              location.pathname === "/order" && styles.active
            }`}
          >
            Order
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
