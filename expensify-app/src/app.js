import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();
store.dispatch(addExpense({ description: "water bill", amount: 900 }));
store.dispatch(
  addExpense({ description: "rent", amount: 8790, createdAt: 100 })
);
store.dispatch(addExpense({ description: "Gas bill", amount: 9000 }));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector(".app"));
