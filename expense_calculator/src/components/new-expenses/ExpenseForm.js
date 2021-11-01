import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");

  const [currentState, setState] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setState((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setState((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setState((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const addExpenseHandler = (event) => {
    event.preventDefault();
    setState((prevState) => {
      return {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
    props.onSaveExpenseData({
      ...currentState,
      enteredDate: new Date(currentState.enteredDate),
      id: Math.random().toString(),
    });
  };

  return (
    <form onSubmit={addExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={currentState.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.1"
            value={currentState.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-21"
            value={currentState.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.toggleNewExpenseHandler}>Cancel</button>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
