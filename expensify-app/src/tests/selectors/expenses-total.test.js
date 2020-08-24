import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 for no expenses", () => {
  let total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test("should correctly add up a single expense", () => {
  let total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(100);
});
test("should correctly add up multiple expenses", () => {
  let total = selectExpensesTotal(expenses);
  expect(total).toBe(114100);
});
