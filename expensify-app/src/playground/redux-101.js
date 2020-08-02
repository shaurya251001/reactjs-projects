import { createStore } from "redux"; //you have to createstore to start working with redux

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});

console.log(store.getState()); //gets the current state
//Action-object that gets sent to the store
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "DECREMENT",
});
store.dispatch({
  type: "DECREMENT",
});
console.log(store.getState());
store.dispatch({
  type: "RESET",
});
console.log(store.getState());
