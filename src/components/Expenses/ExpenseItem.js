import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";
import { useState } from "react";

const ExpenseItem = ({ title, amount, date }) => {
  const [newTitle, setNewTitle] = useState(title);

  const ClickHandler = () => {
    setNewTitle("glen");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">£{amount}</div>
      </div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
