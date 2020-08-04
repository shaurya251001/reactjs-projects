import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const now = moment();
console.log(now.format("MMM Do, YYYY"));
class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createdAt: moment(),
    calenderFocussed: false,
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description,
      };
    });
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => {
      return {
        note,
      };
    });
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount,
        };
      });
    }
  };
  onDateChange = (createdAt) => {
    this.setState(() => {
      return {
        createdAt,
      };
    });
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocussed: focused }));
  };
  render() {
    return (
      <div>
        <form>
          <input
            autoFocus
            type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocussed}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => {
              false;
            }}
          />
          <textarea
            type="text"
            placeholder="Add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
