import { createStore } from "redux"; //you have to createstore to start working with redux

const store = createStore((state = { count: 0 }) => {
  return state;
});

console.log(store.getState()); //gets the current state
