import React from "react";
import styles from "./ErroModal.module.css";
import Card from "../UI/Card";
import Button from "./Button";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles["backdrop"]} onClick={props.onClick}></div>
      <Card className={styles["modal"]}>
        <header className={styles["header"]}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles["content"]}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={styles["actions"]}>
          <Button onClick={props.onClick}>Okey</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
