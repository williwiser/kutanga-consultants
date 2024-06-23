import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import React from "react";

function Footer() {
  const today = new Date();
  return (
    <footer className={styles.footer}>
      <div className={styles.snWrapper}>
        <p>
          Copyright &copy; Kutanga Consultants {today.getFullYear()}. <br />
          Made with &hearts; by{" "}
          <a
            href="https://williamwani.com/"
            className={styles.devLink}
            target="blank"
          >
            William Wani
          </a>
        </p>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/kutanga_consultants/"
            target="blank"
          >
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/groups/405464720509845/"
            target="blank"
          >
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
