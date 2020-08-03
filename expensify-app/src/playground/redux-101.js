import { createStore } from "redux"; //you have to createstore to start working with redux

//Action generators -functions that eturn action objects
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy,
  };
};
const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy,
  };
};

const setCount = ({ count }) => {
  return {
    type: "SET",
    count,
  };
};
const resetCount = () => {
  return {
    type: "RESET",
  };
};

//Reducer

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
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
}; //A Reducer function
//Reducers are pure func-pure func outputs of a pure func are determined only by its inputs does not require anything outside its scope
//                      -does not change action and state..

const store = createStore(countReducer);
// console.log(store.getState()); //gets the current state
//Action-object that gets sent to the store
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 9 }));
store.dispatch(decrementCount());

// console.log(store.getState());
store.dispatch(resetCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(setCount({ count: 101 }));
// console.log(store.getState());
