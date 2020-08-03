import { createStore, combineReducers } from "redux";
//combineReducers combines the multiple reducers.

//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer,
  })
);

console.log(store.getState());

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
