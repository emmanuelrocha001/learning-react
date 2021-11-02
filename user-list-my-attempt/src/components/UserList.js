import React from "react";
import UserListItem from "./UserListItem";
import styles from "./UserList";
import Section from "./UI/Section";
const UserList = (props) => {
  const users = props.users.map((user) => {
    return <UserListItem name={user.name} age={user.age} />;
  });
  return (
    <Section>
      <div className={styles["user-list"]}>{users}</div>
    </Section>
  );
};

export default UserList;
