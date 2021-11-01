import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      {props.showNewExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={props.onSaveExpenseData}
          toggleNewExpenseHandler={props.toggleNewExpenseHandler}
        />
      )}
      {!props.showNewExpenseForm && (
        <div className="">
          <button onClick={props.toggleNewExpenseHandler}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
