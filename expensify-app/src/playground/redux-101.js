import { createStore } from "redux"; //you have to createstore to start working with redux

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
});

// console.log(store.getState()); //gets the current state
//Action-object that gets sent to the store
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 5,
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 9,
});
store.dispatch({
  type: "DECREMENT",
});

// console.log(store.getState());
store.dispatch({
  type: "RESET",
});
store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "SET",
  count: 101,
});
// console.log(store.getState());
