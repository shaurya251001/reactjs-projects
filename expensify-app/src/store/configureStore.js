import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import { createStore, combineReducers } from "redux";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filter: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
