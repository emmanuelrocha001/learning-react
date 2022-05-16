import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(() => {
      return !isActive;
    });
  }
  return (
    <div className="new-expense">
      {isActive ? (
        <ExpenseForm
          onSaveNewExpenseDataHandler={props.onSaveNewExpenseDataHandler}
          toggle={toggle}
        />
      ) : (
        <button onClick={toggle}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
