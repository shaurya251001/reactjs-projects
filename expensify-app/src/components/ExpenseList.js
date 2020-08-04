import React from "react";
import { connect } from "react-redux";

const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.filters.sortBy}
      {props.expenses.length}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filter,
  };
};
export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;
