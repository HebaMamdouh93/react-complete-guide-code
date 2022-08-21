import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const filterByYearHandler = (year) => {
    setEnteredYear(year);
  };
  const filteredExpensesByYear = props.items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(enteredYear);
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onFilterByYear={filterByYearHandler}
        />
        {/* {filteredExpensesByYear.length === 0 ? (
        <p>No Expenses found.</p>
      ) : (
        filteredExpensesByYear.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
        {/* {filteredExpensesByYear.length === 0 && <p>No Expenses found.</p> }
      {filteredExpensesByYear.length > 0 && (
        filteredExpensesByYear.map((expense, index) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
        <ExpensesChart expenses = {filteredExpensesByYear}/> 
        <ExpensesList items={filteredExpensesByYear} />
      </Card>
    </li>
  );
};

export default Expenses;
