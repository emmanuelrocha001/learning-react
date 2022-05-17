import React, { useState } from "react";
// import styled from "styled-components";
import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => {
//       return props.isInvalid ? "red" : "black";
//     }};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid
//       ${(props) => {
//         return props.isInvalid ? "red" : "#ccc";
//       }};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//     background-color: ${(props) => {
//       return props.isInvalid ? "salmon" : "transparent";
//     }};
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const goalInputChangeHandler = (event) => {
    setIsInvalid(event.target.value.trim().length < 1);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (isInvalid) {
      return;
    }
    props.onAddGoal(enteredValue);
  };
  // className={isInvalid && "invalid"}
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl isInvalid={isInvalid}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${isInvalid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// {
/* <form onSubmit={formSubmitHandler}>
<div className={`form-control ${isInvalid ? "invalid" : ""}`}>
  <label
  // style={{
  //   color: isInvalid ? "red" : "black",
  // }}
  >
    Course Goal
  </label>
  <input
    type="text"
    onChange={goalInputChangeHandler}
    // style={{
    //   borderColor: isInvalid ? "red" : "black",
    //   backgroundColor: isInvalid ? "salmon" : "transparent",
    // }}
  />
</div>
<Button type="submit">Add Goal</Button>
</form> */
// }
