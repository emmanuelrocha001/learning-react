import React, { useState } from "react";
import { Dialog, Form, FormInput, FormButton } from "@fluentui/react-northstar";
const NewUserInput = (props) => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submit = () => {
    if (!name.trim() || !age.trim()) {
      setError("Please enter a valid name and age(non-empty values)");
      return;
    }
    if (!parseInt(age)) {
      setError("Please enter a valid age");
      return;
    }
    props.addUser(name, age);
    setName("");
    setAge("");
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onAgeChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Form onSubmit={submit}>
      <FormInput
        onChange={onNameChange}
        label="Name"
        name="nameInput"
        id="name-input"
        inline="true"
        value={name}
      ></FormInput>
      <FormInput
        onChange={onAgeChange}
        label="Age"
        name="ageInput"
        id="age-input"
        inline="true"
        value={age}
      ></FormInput>
      <FormButton content="Add" onSubmit={submit} />
      <Dialog
        confirmButton="Ok"
        onConfirm={() => {
          setError("");
        }}
        content={error}
        header="Invalid input"
        open={error !== ""}
      />
    </Form>
  );
};

export default NewUserInput;
