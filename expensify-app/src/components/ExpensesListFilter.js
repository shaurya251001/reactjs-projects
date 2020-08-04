import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    filters: state.filter,
  };
};
export default connect(mapStateToProps)(ExpensesListFilter);
