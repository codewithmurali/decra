import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/kncet.png";
import commonStyles from "../../commonStyles.module.css";
import { Link } from "react-scroll";
import menu from "../../assets/menu.svg";
import Popup from "../Popup/Popup";

const Navbar = () => {
  const [menuClick, setMenuClick] = useState(true);
  const [navbarCom, setNavbarCom] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarCom(true);
    } else {
      setNavbarCom(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <Popup />

      <div
        className={`${commonStyles.outer__layout} ${styles.navbar}  ${
          navbarCom ? styles.navbar__active : styles.navbar__inactive
        }`}
        id="navbar"
      >
        <img className={styles.navbar__logo} src={logo} />
        <img
          src={menu}
          alt="menu-bar"
          className={styles.menu__bar}
          onClick={() => {
            setMenuClick(!menuClick);
          }}
        />
        <ul className={menuClick ? styles.nav_container : styles.menu__click}>
          <li className={styles.navbar__item}>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link
              to="prizes"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Prizes
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link
              to="events"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Events
            </Link>
          </li>
          <li className={styles.navbar__item}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
