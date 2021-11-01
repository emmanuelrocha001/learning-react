import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItemList.css";

const ExpenseItemList = (props) => {
  const expenseItems = props.expenseItems.map((itemData) => (
    <ExpenseItem
      id={itemData.id}
      title={itemData.title}
      amount={itemData.amount}
      date={itemData.date}
    ></ExpenseItem>
  ));
  {
    /* {expenseItems.length == 0 && <p>No items found.</p>}
      {expenseItems.length > 0 && <div>{expenseItems}</div>} */
  }
  let expensesContent = <p>No items found.</p>;

  if (expenseItems.length > 0) {
    expensesContent = <ul className="expenses-list">{expenseItems}</ul>;
    return expensesContent;
  } else {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
};

export default ExpenseItemList;
