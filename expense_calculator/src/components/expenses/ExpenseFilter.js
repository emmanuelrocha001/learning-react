import React from "react";
import Card from "../ui/Card";
import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  return (
    <form onChange={props.onYearSelectHandler}>
      <div className="expenses-filter">
        <div className="expenses-filter__control">
          <label>Filter by year</label>
          <select value={props.selected}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default ExpenseFilter;
