import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should set up remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("Should set up an edit expense action object", () => {
  const action = editExpense("123abc", { amount: 200 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { amount: 200 },
  });
});

test("Should set add expense action object with thr provided value", () => {
  const expenseData = {
    description: "xYZ",
    amount: 10000,
    createdAt: 100,
    note: "xyz expenditure",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
test("Should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
