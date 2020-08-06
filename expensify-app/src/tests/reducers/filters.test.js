import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should sort by to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

//should set text filter

test("should set text filter", () => {
  const action = { type: "SET_TEXT_FILTER", text: "xyz" };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe("xyz");
});

//should set startDate filter
test("should set startDate filter", () => {
  const action = { type: "SET_START_DATE", startDate: 0 };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(0);
});
//should set endDate filter
test("should set the end date", () => {
  const action = { type: "SET_END_DATE", endDate: 0 };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(0);
});
