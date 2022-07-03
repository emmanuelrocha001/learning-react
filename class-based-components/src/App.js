import React, { useContext } from "react";
import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

const ErrorBanner = () => {
  const usersCtx = useContext(UsersContext);
  return (
    <h1
      style={{
        color: "white",
      }}
    >
      {usersCtx.error}
    </h1>
  );
};

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
