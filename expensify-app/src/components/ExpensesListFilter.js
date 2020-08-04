import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

function ExpensesListFilter(props) {
  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={props.filters.sortBy}
        onChange={(e) => {
          props.dispatch(
            e.target.value === "amount" ? sortByAmount() : sortByDate()
          );
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filters: state.filter,
  };
};
export default connect(mapStateToProps)(ExpensesListFilter);
