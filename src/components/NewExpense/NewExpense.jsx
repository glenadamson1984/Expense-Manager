import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = ({ onAddExpense }) => {
  const [show, setShow] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const newExpenseHandler = (event) => {
    event.preventDefault();
    setShow(true);
  };

  const onShowHandler = (value) => {
    setShow(value);
  };

  return (
    <div className="new-expense">
      {show && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseData}
          onShow={onShowHandler}
        />
      )}
      {!show && <button onClick={newExpenseHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
