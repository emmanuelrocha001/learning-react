import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";
function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((previousUsers) => {
      return [user, ...previousUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
