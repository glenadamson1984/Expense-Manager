import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filter, setFilter] = useState("2020");

  const onFilterChangeHandler = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  let expenseContent = <p>No expenses found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filter}
          onFilterChange={onFilterChangeHandler}
        />
        {expenseContent}
      </Card>
    </>
  );
};

export default Expenses;
