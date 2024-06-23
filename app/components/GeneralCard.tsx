import React from "react";
import styles from "./GeneralCard.module.css";
import { list } from "postcss";

interface Prop {
  title: string;
  price: string;
}

function ProcessCard(props: Prop) {
  return (
    <div className={styles.card}>
      <h1 className={styles.cardTitleGrey}>{props.title}</h1>
      <p className={styles.cardBody}>{props.price}</p>
    </div>
  );
}

export default ProcessCard;
