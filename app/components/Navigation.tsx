"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "/app/assets/kutanga_logo_blue.png";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [isActive, setIsActive] = useState(true);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <div className={styles.header}>
      <div className={styles.hdWrapper}>
        <div className={styles.resNav}>
          <Link href="/" onClick={toggleActiveClass}>
            <Image src={logo} width={80} height={80} alt="logo" />
          </Link>
          <button className={styles.hamburger} onClick={toggleActiveClass}>
            <FontAwesomeIcon icon={isActive ? faBars : faClose} />
          </button>
        </div>
        <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
          <ul>
            <li>
              <Link
                href="/"
                onClick={toggleActiveClass}
                className={styles.navLink}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={toggleActiveClass}
                className={styles.navLink}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={toggleActiveClass}
                className={styles.navLink}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={toggleActiveClass}
                className={styles.lastBtn}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
