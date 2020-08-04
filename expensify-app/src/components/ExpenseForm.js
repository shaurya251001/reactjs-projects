import React, { Component } from "react";

class ExpenseForm extends Component {
  state = {
    description: "",
    note: "",
    amount: "",
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
