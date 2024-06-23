"use client";
import React, { FormEvent, useRef, useState } from "react";
import styles from "./Contact.module.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import "dotenv/config";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState(false);
  const [gotError, setGotError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("template_zah3fmu", "template_zah3fmu", form.current!, {
        publicKey: "Ll8H5_isYgdFODuAM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessageSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setGotError(true);
        }
      );
  };

  return (
    <div>
      <section className="head">
        <div className="snWrapper">
          <h1 className="navTitle">Contact us</h1>
        </div>
      </section>
      <section id={styles.sn1} className="sn">
        <div className="snWrapper">
          <h1 className="title">FREE CONSULTATION</h1>
          <hr className="underline" />
          <article className={styles.contactInfo}>
            <p className={styles.info}>
              <strong>
                You can get in touch using our contact details, or filling out
                the form below.
              </strong>
            </p>
            <div>
              <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
              <p>
                <strong>Contact:</strong> 081 830 5591
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:kutanga.group@gmail.com">
                  kutanga.group@gmail.com
                </a>
              </p>
            </div>
            <div>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <p>
                <strong>Location:</strong> 3537 Dr Matrines St. Krugersdorp,
                Gauteng
              </p>
            </div>
          </article>
          <div className={styles.container}>
            {messageSent ? (
              <motion.div
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                  type: "tween",
                  duration: 1.5,
                  easeIn: 0.5,
                }}
                variants={{
                  initialState: {
                    opacity: 0,
                  },
                  animateState: {
                    opacity: 100,
                  },
                  exitState: {
                    opacity: 100,
                  },
                }}
                className={styles.messageSuccess}
              >
                <h1>
                  <strong>Thanks for reaching out!</strong>
                </h1>
                <p>We will get back to you soon.</p>
              </motion.div>
            ) : (
              <form id="frm" ref={form} onSubmit={sendEmail} method="POST">
                <input type="text" name="user_name" placeholder="Name" />
                <input type="email" name="user_email" placeholder="Email" />
                <textarea
                  form="frm"
                  name="user_message"
                  placeholder="Message"
                />
                <input
                  className={styles.submitBtn}
                  type="submit"
                  value="Send"
                />
              </form>
            )}
            {gotError ? (
              <p className={styles.error}>
                There seems to be a problem. <br></br>
                Please try again another time.
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
