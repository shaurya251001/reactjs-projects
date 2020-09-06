import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "../components/ExpensesListFilter";
import ExpensesSummary from "../components/ExpensesSummary";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpensesSummary/>
      <ExpenseListFilter />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDashboardPage;
