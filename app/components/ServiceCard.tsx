import React from "react";
import styles from "./ServiceCard.module.css";

interface Service {
  name: string;
  price: string;
}
interface Prop {
  title: string;
  services: Service[];
  isBlue: boolean;
}

function ProcessCard(props: Prop) {
  return (
    <div className={styles.card}>
      <h1
        className={props.isBlue ? styles.cardTitleBlue : styles.cardTitleGrey}
      >
        {props.title}
      </h1>
      <ul className={styles.cardBody}>
        {props.services.map((service) => {
          return (
            <li key={service.name}>
              <span>{service.name}</span> <strong>{service.price}</strong>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProcessCard;
