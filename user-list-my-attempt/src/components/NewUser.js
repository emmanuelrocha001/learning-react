import React, { useState } from "react";
import Container from "./UI/Container";
import Section from "./UI/Section";
import styled from "styled-components";
import PopUp from "./PopUp";
import Button from "./UI/Button";
const Center = styled.div`
  /* justify-content: center; */
  display: block;
  /* align-content: flex-start; */
`;
const InputContainer = styled.div`
  width: fit-content;
  font-weight: 700;
  margin: 6px;
`;

const Input = styled.input`
  width: 700px;
  border-radius: 6px;
  border: 3px solid rgb(218, 218, 218);
  background-color: ${(props) => (props.invalid ? "red" : "transparent")};
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 25%;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;
const NewUser = (props) => {
  const [currentState, setState] = useState({
    name: "",
    age: "",
    invalidInput: false,
    message: "",
  });
  const onAddUserHandler = (event) => {
    event.preventDefault();
    console.log(currentState);
    if (currentState.age.length < 1 || currentState.name.length < 1) {
      setState((previousState) => {
        return {
          ...previousState,
          message: "Please make sure all fields are filled in.",
        };
      });
      return;
    }
    if (Number(currentState.age) < 1) {
      setState((previousState) => {
        return {
          ...previousState,
          message: "Please enter a valid age (> 0)",
        };
      });
      return;
    }

    props.addNewUserHandler({
      name: currentState.name,
      age: Number(currentState.age),
    });

    setState({
      name: "",
      age: "",
      message: "",
    });
  };

  const clearInvalidInputMessage = (value) => {
    setState((previousState) => {
      return {
        ...previousState,
        message: "",
      };
    });
  };
  const onNameInputChangeHandler = (event) => {
    setState((previousState) => {
      return {
        ...previousState,
        name: event.target.value,
      };
    });
  };

  const onAgeInputChangeHandler = (event) => {
    setState((previousState) => {
      return {
        ...previousState,
        age: event.target.value,
      };
    });
  };

  return (
    <div>
      <Section>
        <Container>
          <Center>
            <form onSubmit={onAddUserHandler}>
              <InputContainer>
                <label>Name</label>
              </InputContainer>
              <InputContainer>
                <Input
                  type="text"
                  value={currentState.name}
                  onChange={onNameInputChangeHandler}
                  invalid={currentState.message.length > 1}
                ></Input>
              </InputContainer>
              <InputContainer>
                <label>Age</label>
              </InputContainer>
              <InputContainer>
                <Input
                  type="number"
                  value={currentState.age}
                  onChange={onAgeInputChangeHandler}
                  invalid={currentState.message.length > 0}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Button type="submit">Add User</Button>
              </InputContainer>
            </form>
          </Center>
        </Container>
      </Section>

      {currentState.message.length > 0 && <BackDrop />}
      {currentState.message.length > 0 && (
        <PopUp
          clearInvalidInputMessage={clearInvalidInputMessage}
          message={currentState.message}
        />
      )}
    </div>
  );
};

export default NewUser;
