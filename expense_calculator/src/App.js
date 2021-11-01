import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expenses/NewExpense";
const App = () => {
  const [currentState, setState] = useState({
    expenses: [],
    yearSelected: 2022,
    showNewExpenseForm: false,
  });

  const onSaveExpenseData = (data) => {
    console.log(data);
    setState((previousState) => {
      return {
        ...previousState,
        showNewExpenseForm: false,
        expenses: [
          ...previousState.expenses,
          {
            id: data.id,
            date: data.enteredDate,
            amount: data.enteredAmount,
            title: data.enteredTitle,
          },
        ],
      };
    });
  };

  const toggleNewExpenseHandler = () => {
    console.log("HMM");
    setState((previousState) => {
      return {
        ...previousState,
        showNewExpenseForm: !previousState.showNewExpenseForm,
      };
    });
  };

  const onYearSelectHandler = (event) => {
    console.log("filtering items");
    let yearSelected = event.target.value;
    setState((previousState) => {
      return {
        ...previousState,
        yearSelected: yearSelected,
      };
    });
  };
  console.log("Building entire app...");
  return (
    <div>
      <NewExpense
        onSaveExpenseData={onSaveExpenseData}
        toggleNewExpenseHandler={toggleNewExpenseHandler}
        showNewExpenseForm={currentState.showNewExpenseForm}
      />
      <Expenses
        selected={currentState.yearSelected}
        expenseItems={currentState.expenses.filter(
          (x) => x.date.getFullYear() == currentState.yearSelected
        )}
        onYearSelectHandler={onYearSelectHandler}
      />
    </div>
  );
  // jsx translates to this under the hood code
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "let's get started!"),
  //   React.createElement(ExpenseItemList, { expenseItems: expenses })
  // );
};

export default App;
