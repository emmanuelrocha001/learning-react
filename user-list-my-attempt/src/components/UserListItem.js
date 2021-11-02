import React from "react";
import styles from "./UserListItem.module.css";
import Container from "./UI/Container";
const UserListItem = (props) => {
  return (
    <Container>
      <div
        className={styles["user-list-item"]}
      >{`${props.name} (${props.age} years old)`}</div>
    </Container>
  );
};

export default UserListItem;
