import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";
const UserList = (props) => {
  if (props.users.length < 1) {
    return (
      <div className={styles["empty"]}>
        <h3>No users found.</h3>
      </div>
    );
  }
  const users = props.users.map((user) => {
    return <li key={user.id}>{`${user.name} (${user.age} years old)`}</li>;
  });

  return (
    <Card className={styles["users"]}>
      <ul>{users}</ul>
    </Card>
  );
};

export default UserList;
