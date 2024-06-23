import React from "react";
import styles from "./ProcessCard.module.css";
import { list } from "postcss";
interface Prop {
  title: string;
  body: string;
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
      <p className={styles.cardBody}>{props.body}</p>
    </div>
  );
}

export default ProcessCard;
