import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   console.log(`${title} changed`);
  //   setTitle("Updated!");
  // };
  return (
    <div key={props.id}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">
            {formatter.format(props.amount)}
          </div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </div>
  );
};
export default ExpenseItem;
