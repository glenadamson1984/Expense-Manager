import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({ onSaveExpenseData, onShow }) => {
  // could do this ....
  const [details, setDetails] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  // or
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    // if you are updating state that relies on prev state it should be written like this
    setDetails((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    // and not like this
    // setDetails({
    //   ...details,
    //   enteredTitle: event.target.value
    // })
    // as we cannot guarantee that all state has been successfully updated as state updates are queued
    // the other more common option would be to manage each of these pieces of state seperately
  };
  const amountChangeHandler = (event) => {
    setDetails((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setDetails((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: details.enteredTitle,
      amount: +details.enteredAmount,
      date: new Date(details.enteredDate),
    };

    onSaveExpenseData(expenseData);

    setDetails({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    onShow(false);
  };

  const cancelHandler = (event) => {
    onShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            onChange={titleChangeHandler}
            value={details.enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={details.enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={details.enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
