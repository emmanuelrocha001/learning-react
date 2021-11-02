import React, { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import NewUser from "./components/NewUser";
import PopUp from "./components/PopUp";
import styled from "styled-components";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (user) => {
    setUsers((previousUsers) => {
      return [...previousUsers, user];
    });
  };

  return (
    <div className="App">
      <NewUser addNewUserHandler={addNewUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
