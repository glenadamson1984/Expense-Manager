import "./Expenses.css";
import Card from "../Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
  const [filter, setFilter] = useState("2020");

  const onFilterChangeHandler = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filter}
          onFilterChange={onFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
