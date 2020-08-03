import { createStore, combineReducers } from "redux";
//combineReducers combines the multiple reducers.

const demoState = {
  expenses: [
    {
      id: "sckokd",
      description: "Rent",
      note: "This is the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount,
    startDate: undefined,
    endDate: undefined,
  },
};
