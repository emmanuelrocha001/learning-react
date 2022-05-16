import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState("2022");

  const onYearSelectedHandler = (event) => {
    setYearFilter(event.target.value);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    console.log(expense.date.getFullYear(), yearFilter);

    return `${expense.date.getFullYear()}` === yearFilter;
  });
  console.log("Building Expenses");

  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearSelectedHandler={onYearSelectedHandler}
        yearSelected={yearFilter}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
