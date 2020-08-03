import { createStore, combineReducers } from "redux";
import uuid from "uuid";
//combineReducers combines the multiple reducers.

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

//REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      const updateState = state.filter((expense) => {
        if (expense.id !== action.id) {
          return expense;
        }
      });
      return updateState;
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
store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "tuition", amount: 400 })
);
store.dispatch(addExpense({ description: "why", amount: 800 }));

store.dispatch(removeExpense());
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
