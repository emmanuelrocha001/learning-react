import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes(`@`),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: null,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: null,
  };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [emailState, dispathEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispathPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const ctx = useContext(AuthContext);
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking for validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(identifier);
      console.log("clean up");
    };
  }, [emailIsValid, passwordIsValid]);

  // useEffect(() => {
  //   const identifier = setInterval(() => {
  //     console.log("hiddddd");
  //   }, 5000);
  //   return () => {
  //     clearInterval(identifier);
  //   };
  // }, []);

  const emailChangeHandler = (event) => {
    dispathEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispathPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log(`${emailState.value} ${passwordState.value}`);
      ctx.onLogIn(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          inputPropName="email"
          value={emailState.value}
          isValid={emailIsValid}
          changeHandler={emailChangeHandler}
          onBlur={() => {
            dispathEmail({
              type: "INPUT_BLUR",
            });
          }}
          label={"E-Mail"}
        />
        <Input
          ref={passwordInputRef}
          inputPropName="password"
          value={passwordState.value}
          isValid={passwordIsValid}
          changeHandler={passwordChangeHandler}
          onBlur={() => {
            dispathPassword({
              type: "INPUT_BLUR",
            });
          }}
          label={"Password"}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
