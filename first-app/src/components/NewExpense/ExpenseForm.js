import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate((previousDate) => {
      return event.target.value;
    });
  };
  const submit = (event) => {
    event.preventDefault();
    const newExpenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveNewExpenseDataHandler(newExpenseData);
    props.toggle();
  };

  return (
    <form onSubmit={submit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-05-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.toggle} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
