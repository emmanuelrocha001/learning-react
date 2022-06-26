import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../store/auth-context";

const MainHeader = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <header className={classes["main-header"]}>
            <h1>A Typical Page</h1>
            <Navigation isLoggedIn={ctx.isLoggedIn} onLogout={props.onLogout} />
          </header>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default MainHeader;
