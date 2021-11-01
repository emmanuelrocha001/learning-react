import React, { useState } from "react";
import ExpenseItemList from "./ExpenseItemList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../ui/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseFilter onYearSelectHandler={props.onYearSelectHandler} />
      <ExpenseItemList expenseItems={props.expenseItems} />
      <ExpensesChart expenses={props.expenseItems} />
    </Card>
  );
};

export default Expenses;
