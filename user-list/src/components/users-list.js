import React from "react";
import { List, ListItem } from "@fluentui/react-northstar";

const UserList = (props) => {
  const users = props.users.map((user, index) => (
    <ListItem
      onClick={() => {
        props.removeUser(index);
      }}
      key={index}
      content={`${user.name} (${user.age} years old)`}
      styles={{
        margin: "32px",
        borderRadius: "6px",
        boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
        textAlign: "left",
      }}
    />
  ));
  return <List>{users}</List>;
};

export default UserList;
