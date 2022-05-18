import React, { useState } from "react";
import { CardHeader, Text } from "@fluentui/react-northstar";
import NewUserInput from "./new-user-input";
import UserList from "./users-list";
import styles from "./users.module.css";
const Users = () => {
  const [users, setUsers] = useState([]);

  const removeUser = (index) => {
    setUsers((prevUsers) => {
      prevUsers.splice(index, 1);
      return [...prevUsers];
    });
  };

  const addUser = (name, age) => {
    setUsers((prevUsers) => {
      return [{ name: name, age: age }, ...prevUsers];
    });
  };

  return (
    <div className={styles.container}>
      <CardHeader>
        <Text content="Users" weight="bold" size={"largest"} />
      </CardHeader>
      <NewUserInput addUser={addUser}></NewUserInput>
      <UserList users={users} removeUser={removeUser} />
    </div>
  );
};

export default Users;
