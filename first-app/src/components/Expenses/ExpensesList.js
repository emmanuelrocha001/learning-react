import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  return props.filteredExpenses.length < 1 ? (
    <p className="expenses-list__fallback">No records.</p>
  ) : (
    props.filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} data={expense} />
    ))
  );
};
export default ExpensesList;
