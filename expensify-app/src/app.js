import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();
store.dispatch(addExpense({ description: "water bill", amount: 900 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 9000 }));
store.dispatch(setTextFilter("gas"));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.querySelector(".app"));
