import React, { Component } from "react";

import styles from "./navbar.module.css";
class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <span className={styles.navbarTitle}>Full Metal Alchemist</span>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              About Us
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Info
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Support Us
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
