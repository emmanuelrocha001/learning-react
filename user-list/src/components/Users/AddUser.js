import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErroMessage] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length < 1 || age.trim().length < 1) {
      setErroMessage({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (Number(age) < 1) {
      setErroMessage({
        title: "Invalid age",
        message: "Please enter a valid age(>0).",
      });
      return;
    }
    let id = new Date().toISOString();
    props.onAddUser({
      name: userName,
      age: Number(age),
      id: id,
    });
    console.log(userName + " " + age);
    setUserName("");
    setAge("");
  };

  const resetErrorMessage = () => {
    setErroMessage();
  };

  const onUserNameInputChange = (event) => {
    setUserName(event.target.value);
  };
  const onAgeInputChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      {errorMessage && (
        <ErrorModal
          title={errorMessage.title}
          errorMessage={errorMessage.message}
          onClick={resetErrorMessage}
        />
      )}
      <Card className={styles["input"]}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={onUserNameInputChange}
            value={userName}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={onAgeInputChange}
            value={age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
