import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "../components/ExpensesListFilter";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilter />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
