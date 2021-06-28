import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filter, setFilter] = useState("");

  const onFilterChangeHandler = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter onFilterChange={onFilterChangeHandler} />
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
